const Auth = require('basic-auth');
const Compare = require('tsscmp');

exports.validation = (req, res, next) => {
  const username = process.env.APP_USERNAME;
  const password = process.env.APP_PASSWORD;
  const credentials = Auth(req);

  function validate(name, pass) {
    let valid = true;

    valid = Compare(name, username) && valid;
    valid = Compare(pass, password) && valid;

    return valid;
  }

  if (!credentials || !validate(credentials.name, credentials.pass)) {
    const err = new Error('Unauthorized');
    err.status = 401;
    next(err);
  } else {
    next();
  }
};
