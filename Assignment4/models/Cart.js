const mongoose = require("mongoose");
let modelSchema = mongoose.Schema({
    Type: String,
    name: String,
    price:Number,
    quantity:Number,
    userId:String,

});
let Cart = mongoose.model("Cart", modelSchema);
module.exports = Cart;
