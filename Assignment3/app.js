const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");
const aboutRouter = require('./routes/about');
const blogRouter = require('./routes/blog');
const contactRouter = require('./routes/contact');
const homeRouter = require('./routes/home');
const landingRouter = require('./routes/landing');
const registerRouter = require('./routes/register');
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');
const outRouter = require('./routes/logout');


const flash = require("express-flash");
const session = require("express-session");

let app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method")); 
var expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(
  session({
    secret: "My Top Secret String",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());
app.use((req, res, next) => {
  res.locals.flash = req.flash();
  next();
});

app.use('/', aboutRouter);
app.use('/', blogRouter);
app.use('/', contactRouter);
app.use('/', homeRouter);
app.use('/', landingRouter);
app.use('/', registerRouter);
app.use('/', aboutRouter);
app.use('/', productRouter); 
app.use('/', cartRouter); 
app.use('/', outRouter);


app.get("/", function(req, res) {
  res.render("register", { flash: req.flash() });
});

mongoose
  .connect("mongodb://localhost:27017/project", { useNewUrlParser: true })
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
