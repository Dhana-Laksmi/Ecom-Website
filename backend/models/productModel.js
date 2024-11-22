const mongoose=require('mongoose');

const productSchema= new mongoose.Schema({
    name:String,
    price:String,
    desc:String,
    rating:String,
    images:[
        {
            image:String
        }
    ],
    category:String,
    seller:String,
    stock:String,
    numOfReviews:String,
    createAt:Date
})

//collectionName, schemaName
const productModel=mongoose.model('Product', productSchema);

module.exports=productModel;