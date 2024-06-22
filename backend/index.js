const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const jwt = require("jsonwebtoken");
const { login, signup } = require("./controllers/userController");

dotenv.config();

console.log('MONGO_URL:', process.env.MONGO_URL); // Log the MongoDB URL

// Middleware
app.use(express.json());
app.use(cors());

// App creation
app.get("/", (req, res) => {
  res.send("Express is Running");
});

// Image storage engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

// Creating Uploads
app.use("/images", express.static(`upload/images`));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:9000/images/${req.file.filename}`,
  });
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to DataBase'))
  .catch((error) => console.log('Not Connected to DataBase ERROR!', error));
  

// Creating API for Add Product
app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  try {
    const newproduct = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });
    const product = await newproduct.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Creating API for remove Product
app.delete("/removeproduct/:id", (req, res) => {
  const id = req.params.id;

  Product.findByIdAndDelete({ _id: id })
    .then((resp) => res.json(resp))
    .catch((err) => res.json(err.message));
});

// Creating API for get all Product
app.get("/allproduct", async (req, res) => {
  try {
    const allproduct = await Product.find({});
    res.status(200).json(allproduct);
  } catch {
    res.status(500).json("Can't Find All Products");
  }
});

// Get popular product
app.get("/popularproducts", async (req, res) => {
  try {
    const product = await Product.find({ category: "women" });
    const popularproducts = product.slice(0, 4);
    res.status(200).json(popularproducts);
  } catch {
    res.status(500).json("Can't Find Popular Products");
  }
});

// Get latest product
app.get("/latestproducts", async (req, res) => {
  try {
    const product = await Product.find({ category: "men" });
    const popularproducts = product.slice(4, 12);
    res.status(200).json(popularproducts);
  } catch {
    res.status(500).json("Can't Find Popular Products");
  }
});

// Signup Routes
app.post("/signup", signup);

// Login
app.post("/login", login);

// Start server
app.listen(9000, () => {
  console.log("Server Is Running");
});
