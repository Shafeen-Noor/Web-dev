const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");
const productRouter = require('./routes/product');

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method")); 
var expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', productRouter); 

app.get("/", function(req, res) {
  res.render("homepage");
});

mongoose
  .connect("mongodb://localhost:27017/admin", { useNewUrlParser: true })
  .then(() => console.log("Connected to Mongo ...."))
  .catch((error) => console.log(error.message));

app.listen(3000);



// const products= ["Shafeen","Amina","Hamna","Minal","Sania","Tania","Amna","Irsha"]
// app.get("/", function(req, res) {
//   res.send("Hello World")
// });
// app.get("/api/products", function(req, res) {
//   res.send(products)
// });
// app.get("/api/products/:index", function(req, res) {
//   if(!products[req.params.index])
//     return res.status(400).send("Product not found")
//   else  
//     res.send(products[req.params.index])
// });
// app.put("/api/products/:index", function(req, res) {
 
//     products[req.params.index]=req.body.name;
//     res.send(products[req.params.index])

// });
