const express = require("express");
const productRoute = express.Router();
const productSchema = require("../model/schema");
const catSchema=require("../model/schema_cat");
const loginSchema = require("../model/schema_user");
const mongoose = require("mongoose");
productRoute.post("/create-account",(req,res)=>{
    console.log("hello");
    loginSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
productRoute.post("/login",(req,res)=>{
    const{email,password}=req.body;
    loginSchema.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password ){
                res.json(user._id);
            }
            else{
                res.json(0);
            }
        }
        else{
            res.json(1);
        }
       
    })
})

productRoute.get("/login1",(req,res)=>{
    loginSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
productRoute.put("/edit-product/:id",(req,res)=>{
    productSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$push:{
        review:req.body.review,
        ReviewText:req.body.ReviewText,
        ReviewTitle:req.body.ReviewTitle,
        ReviewDate:new Date(),
        ReviewUserName:req.body.ReviewUserName,
        ReviewUserCountry:req.body.ReviewUserCountry,
    },
    $inc:{count:1}

},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
productRoute.put("/edit-login/:id",(req,res)=>{
    loginSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$push:{
        rating:req.body.review,
        reviewtext:req.body.ReviewText,
        revietitle:req.body.ReviewTitle,
        product_name:req.body.product_name,
        reviewdate:new Date()
    },
    $inc:{count:1}

},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
productRoute.route("/update-profile/:id")
.get((req,res)=>{
    loginSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
// .put((req,res)=>{
//     loginSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
//     {$set: req.body},
//     (err,data)=>{
//         if(err)
//             return err;
//         else
//             res.json(data);
//     })
// })
productRoute.put("/update-profile/:id",async(req,res)=>{
    loginSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
   
})
productRoute.put("/update-profile1/:id",async(req,res)=>{
    loginSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
   
})
productRoute.post("/update-profile/:id",async(req,res)=>{
    loginSchema.findOne({_id:(req.params.id)})
    .then(user=>{
        res.json(user);
    })
    
})
productRoute.get("/xyz/:id",async(req,res)=>{
    loginSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
productRoute.get("/",(req,res)=>{
    productSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
productRoute.get("/cat",(req,res)=>{
    catSchema.find((err,data)=>{
         if(err)
             return err;
         else
             res.json(data);
     })
 })
module.exports = productRoute;