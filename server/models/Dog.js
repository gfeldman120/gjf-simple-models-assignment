const mongoose = require('mongoose');
let DogModel;
// Data for dog, all typed fields are required
const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  breed: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});
DogModel = mongoose.model('Dog', DogSchema);
module.exports = DogModel;