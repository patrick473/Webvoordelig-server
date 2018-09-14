import mongoose = require('mongoose');
import IProductbase from '../interfaces/IProductbase';
import IProduct from '../interfaces/IProduct'
import ICard from '../interfaces/ICard';


var options = {discriminatorKey: 'kind'};
interface IProductbaseModel extends IProductbase, mongoose.Document{}
interface IProductModel extends IProduct, mongoose.Document{}
interface ICardModel extends ICard, mongoose.Document{}

const baseSchema = new mongoose.Schema({
    category:String,
    name:String,
    price:Number,
    picture:String,
    amount:Number
},options);

const regularProductSchema =new mongoose.Schema({

    
    description:String,
    

},options);

const cardSchema=new mongoose.Schema({

   
    set:String,
    quality:String,
    rarity:String,
    holo:   {type:String,default:false},
    collectorNumber:String,
    extra: String,
   

},options);

var base: mongoose.Model<IProductbaseModel> = mongoose.model<IProductbaseModel>('products',baseSchema);

export const product:mongoose.Model<IProductModel> = base.discriminator<IProductModel>('product',regularProductSchema);

export const card:mongoose.Model<ICardModel> = base.discriminator<ICardModel>('card',cardSchema);