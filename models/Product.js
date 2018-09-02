const mongoose = require('mongoose');
const {Schema} = mongoose;

var options = {discriminatorKey: 'kind'};

const allproductSchema = new Schema({
    category:String,
    name:String,
    price:Number,
    picture:String,
    amount:Number
},options);

var Product = mongoose.model('products',allproductSchema);

const productSchema = Product.discriminator('product',new Schema({

    
    description:String,
    

}),options);

const cardSchema = Product.discriminator('card',new Schema({

   
    set:String,
    quality:String,
    rarity:String,
    holo:   {type:String,default:false},
    collectorNumber:String,
    extra: String,
   

}),options);