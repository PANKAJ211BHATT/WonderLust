const express = require("express");
const app = express();
const mongoose = require("mongoose");

let MONGO_URL = "mongodb://127.0.0.1:27017/WonderLust";
const port = 4040;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

main()
  .then(() => {
    console.log("connected successfully ");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}
