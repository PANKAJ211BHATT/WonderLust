const express = require("express");
const app = express();
exports.app = app;
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/ListingFile");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

const MONGO_URL = "mongodb://127.0.0.1:27017/WonderLust";
exports.MONGO_URL = MONGO_URL;
const port = 4040;
exports.port = port;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
main()
  .then(() => {
    console.log("connected successfully ");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/Listing", async (req, res) => {
  const allListing = await Listing.find({});

  res.render("index.ejs", { allListing });
});
app.get("/listing/newPost", (req, res) => {
  console.log(req.query); // Log query parameters if present
  res.render("newPost.ejs");
});

app.post("/listing", async (req, res) => {
  let listingData = req.body.listing; // Access the entire listing object
  const newlisting = new Listing(listingData);
  await newlisting.save();
  res.redirect("/Listing");
});
app.get("/listing/:id", async (req, res) => {
  let { id } = req.params;
  const user = await Listing.findById(id);
  res.render("listeduser", { user });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
