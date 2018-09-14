import mongoose = require('mongoose');
import ICategory from '../interfaces/ICategory';
const {Schema} = mongoose;

interface ICategoryModel extends ICategory, mongoose.Document{}

const schema = new mongoose.Schema({

    name: String,
    slug: String,
    parent: {type: Schema.Types.ObjectId, ref: 'categories'}

});

export let categorySchema= mongoose.model<ICategoryModel>('categories',schema);

