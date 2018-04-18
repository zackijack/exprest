const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ExampleSchema = new mongoose.Schema(
  {
    sample: {
      type: String,
      required: 'Sample is required!',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Example', ExampleSchema);
