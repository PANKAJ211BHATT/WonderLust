const mongoose = require("mongoose");
const initdata = require("./data");
const Listing = require("../models/ListingFile");

let MONGO_URL = "mongodb://127.0.0.1:27017/WonderLust";

main()
  .then(() => {
    console.log("connected successfully ");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  Listing.insertMany(initdata.data);
  console.log("data Inserted");
};
