const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect("mongodb+srv://rugved:1234@clusterx.mc03un9.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {

      console.log("Successfully connected to the MongoDB!")
    })
    .catch((e) => {
      console.log('Connection failed!');
    })
}

module.exports = connectDB;
