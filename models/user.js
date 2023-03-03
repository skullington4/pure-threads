const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  items: {
      type: Array,
      ref: 'Item',
      required: true
  }
  }, {
    timestamps: true
  });

const userSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: String,
  cart: {
    type: Array
  },
  orders: [orderSchema]
}, {
  timestamps: true
});


module.exports = mongoose.model('User', userSchema);