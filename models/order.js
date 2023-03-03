const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({

items: {
    id: mongoose.SchemaTypes.ObjectId,
    type: Array
}
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);