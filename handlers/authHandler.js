const auth = require('basic-auth');
const compare = require('tsscmp');

exports.validation = (req, res, next) => {
  const username = process.env.APP_USERNAME;
  const password = process.env.APP_PASSWORD;
  const credentials = auth(req);

  function validate(name, pass) {
    let valid = true;

    valid = compare(name, username) && valid;
    valid = compare(pass, password) && valid;

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
