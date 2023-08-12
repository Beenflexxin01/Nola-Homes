const mongoose = require('mongoose');

// rent.json / buy.json {
//  title
//  description
//  features
//  img
//  imgcover
//  ratingAverage
//  map
//  policy
//  locations
//  price (varies by bedrooms)

// }

const rentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'An apartment needs a title'],
    unique: true,
  },
  slug: String,
  description: {
    type: String,
    required: [
      true,
      'An apartment must have a description for better user experience',
    ],
    unique: true,
    price: {
      type: Number,
      required: [true, 'An apartment must have a price'],
    },
    imageCover: {
      type: String,
      required: [true, 'An apartment must have a cover image'],
    },
    image: [String],
  },
});

const Rent = mongoose.model('Rent', rentSchema);

module.exports = Rent;
