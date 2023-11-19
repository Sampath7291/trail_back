const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    "SNo":{type:Number},
    "category":{type:String},
    "name":{type:String},
    "images":{type:Array},
    "link":{type:String},
    "OverallReview":{type:Number},
    "review":{type:Array},
    "RateClass":{type:String},
    "ReviewText":{type:Array},
    "ReviewTitle":{type:Array},
    "ReviewUserName":{type:Array},
    "ReviewUserCountry":{type:Array},
    "ReviewDate":{type:Array},
    "count":{type:Number,
    default:0
    }
},{
    collection: "products"
});


module.exports = mongoose.model("productSchema",productSchema);

