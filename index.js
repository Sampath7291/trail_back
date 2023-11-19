const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./controller/router");
const cors= require("cors");
const bodyParser= require("body-parser");
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://products_db:7291@cluster0.xjnf9ny.mongodb.net/");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred while connecting with DB"));
const app = express();
app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ limit: '10mb', extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin,X-Requested-With,Content-Type,Accept,Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE');
    next();
});

app.use("/product",productRoute);
app.listen(4000,()=>{
    console.log("Server started at 4000");
})
