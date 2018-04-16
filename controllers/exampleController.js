const Mongoose = require('mongoose');

const Example = Mongoose.model('Example');

exports.get = async (req, res, next) => {
  if (!req.query.sample) {
    const err = new Error();
    err.status = 400;
    return next(err);
  }

  next();
};

exports.save = async (req, res) => {
  const example = await new Example({
    referenceId: req.query.reference_id,
    sample: req.query.sample,
  }).save();

  res.status(201);
  res.json({ example });
};
