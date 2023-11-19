const mongoose = require("mongoose");
const catSchema = new mongoose.Schema({
    "category":{type:String},
    "product1":{type:String},
    "product2":{type:String},
    "product3":{type:String},
    "product4":{type:String},
    "product5":{type:String},
    
},{
    collection: "cat"
});


module.exports = mongoose.model("catSchema",catSchema);