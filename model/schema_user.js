const mongoose = require("mongoose");
const loginSchema = new mongoose.Schema({
    "email":{type:String},
    "password":{type:String},
    "name":{type:String},
    "country":{type:String},
    "lang":{type:String},
    "product_name":{type:Array},
    "rating":{type:Array},
    "reviewtext":{type:Array},
    "revietitle":{type:Array},
    "reviewdate":{type:Array},
    "image":{type:String,
        default:'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%22-2.145%20-2.145%2060%2060%22%20height%3D%2260%22%20width%3D%2260%22%3E%3Cg%20id%3D%22user-circle-single--circle-geometric-human-person-single-user%22%3E%3Cpath%20id%3D%22Ellipse%204%22%20fill%3D%22%238fbffa%22%20d%3D%22M0%2027.854999999999997a27.854999999999997%2027.854999999999997%200%201%200%2055.709999999999994%200A27.854999999999997%2027.854999999999997%200%201%200%200%2027.854999999999997%22%20stroke-width%3D%224.29%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Ellipse%205%22%20fill%3D%22%232859c5%22%20d%3D%22M17.906785714285714%2019.896428571428572a9.948214285714286%209.948214285714286%200%201%200%2019.896428571428572%200%209.948214285714286%209.948214285714286%200%201%200%20-19.896428571428572%200%22%20stroke-width%3D%224.29%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Subtract%22%20fill%3D%22%232859c5%22%20d%3D%22M44.739109285714285%2041.7825A21.842299285714283%2021.842299285714283%200%200%200%2027.854999999999997%2033.82392857142857a21.842299285714283%2021.842299285714283%200%200%200%20-16.884109285714285%207.958571428571428A21.842299285714283%2021.842299285714283%200%200%200%2027.854999999999997%2049.74107142857142a21.842299285714283%2021.842299285714283%200%200%200%2016.884109285714285%20-7.958571428571428Z%22%20stroke-width%3D%224.29%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E'
    }
},{
    collection: "login"
});


module.exports = mongoose.model("loginSchema",loginSchema);