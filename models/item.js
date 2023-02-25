// This will hold the model for individual clothing items

const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

const itemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  department: {
    type: String,
    enum: ['Mens', 'Womens']
  },
  size: {
    type: String,
    enum: ['XS', 'S', 'M', 'L', 'XL']
  },
  price: {
    type: Number
  },
  stock: {
    type: Number
  },
  color: {
    type: String,
    enum: ['Black', 'White', 'Blue', 'Green', 'Yellow', 'Purple', 'Red', 'Pink']
  },
  secondaryColor: {
    type: String,
    enum: ['', 'Black', 'White', 'Blue', 'Green', 'Yellow', 'Purple', 'Red', 'Pink']
  },
  brand: {
    type: String
  },
  description: {
    type: String
  },
  keyWords: {
    type: String
  },
  imageOne: {
    type: String
  },
  imageTwo: {
    type: String
  },
  imageThree: {
    type: String
  },
  reviews: [reviewSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);