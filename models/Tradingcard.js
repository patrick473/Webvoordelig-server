const mongoose = require('mongoose');
const {Schema} = mongoose;

const cardSchema = new Schema({

    game:String,
    name:String,
    set:String,
    quality:String,
    rarity:String,
    holo:   {type:String,default:false},
    price:Number,
    collectorNumber:String,
    extra: String,
    picture:String,
    amount:Number

});

mongoose.model('tradingcards',cardSchema);
