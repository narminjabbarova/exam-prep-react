const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  category: {type: String, required: true},
  imageUrl: {type: String, required: true},
  price: {type: Number, required: true}
},
{ timestamps: true }
)



const productModel = mongoose.model('Products', productSchema)

module.exports = productModel;