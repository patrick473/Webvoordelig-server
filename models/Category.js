const mongoose = require('mongoose');
const {Schema} = mongoose;

const categorySchema = new Schema({

    name: String,
    slug: String,
    parent: {type: Schema.Types.ObjectId, ref: 'categories'}

});

mongoose.model('categories',categorySchema);
