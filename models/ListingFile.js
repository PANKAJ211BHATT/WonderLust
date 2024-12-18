const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  image: {
    filename: String,
    url: String, // explicitly define URL
  },
  price: {
    type: Number,
    require: true,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
});
const Listing = mongoose.model("Listing", ListingSchema);

module.exports = Listing;
