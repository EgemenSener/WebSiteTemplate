const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const personRoute = require("./routes/person");
const authenticationRoute = require("./routes/authentication");
const multer = require("multer");
const path = require("path");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log("Connected to MongoDB");
});

//Using for reach files from url
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/documents", express.static(path.join(__dirname, "public/documents")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/person", personRoute);
app.use("/auth", authenticationRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});

//Upload File
const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded succesfully.");
  } catch (err) {
    console.log(err);
  }
});
