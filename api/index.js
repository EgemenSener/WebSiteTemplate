const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const personRoute = require("./routes/person");
const multer = require("multer");
const path = require("path");
const jwt = require("jsonwebtoken");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log("Connected to MongoDB");
});

app.use("/images", express.static(path.join(__dirname, "public/images")));

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

//Get Token
app.post("/getToken", async (req, res) => {
  try {
    const user = { name: req.body.username };
    if (
      req.body.username == process.env.NAME &&
      req.body.password == process.env.PASS
    ) {
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "2h",
      });
      res.status(200).json({ accessToken: accessToken });
    } else {
      res.status(403).send("Username or password not correct!");
    }
  } catch (error) {
    console.log(error);
  }
});
