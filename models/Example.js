const Mongoose = require('mongoose');

Mongoose.Promise = global.Promise;

const ExampleSchema = new Mongoose.Schema(
  {
    sample: {
      type: String,
      required: 'Sample is required!',
    },
  },
  { timestamps: true }
);

module.exports = Mongoose.model('Example', ExampleSchema);
