require("dotenv").config();
const express = require("express");
const app = express();
const { connectToDb } = require("./connectToDb");
const { seedUsers } = require("./seedUsers");
const { loginRoute } = require("./loginRoute.js");

app.use(express.json());

app.use("/api", loginRoute);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

//connect to db
connectToDb();

//seeding of users
seedUsers();
