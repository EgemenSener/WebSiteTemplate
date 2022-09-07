const router = require("express").Router();
const multer = require("multer");
const middlewares = require("../middlewares");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/" + req.params.id);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
router.post("/upload/:id", middlewares.authenticateToken, upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded succesfully.");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
