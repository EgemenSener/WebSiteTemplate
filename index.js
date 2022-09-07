const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const personRoute = require("./routes/person");
const tokenRoute = require("./routes/token");
const uploadRoute = require("./routes/upload");
const path = require("path");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log("Connected to MongoDB");
});

//Using for reach files from url
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/documents", express.static(path.join(__dirname, "public/documents")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/person", personRoute);
app.use("/", tokenRoute);
app.use("/", uploadRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
