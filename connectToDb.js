require("dotenv").config();
const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connected to database successfully!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectToDb };
