var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");

if (!fs.existsSync("./public/AUDIO")) {
  fs.mkdirSync("./public/AUDIO");
}

// get the mp3 files from audio folder
filenames = fs
  .readdirSync("./public/AUDIO")
  // .filter((el) => path.extname(el) === ".mp3");
  .filter((el) => path.extname(el) !== ".txt");

let lastPlayed = fs.readFileSync("./public/LASTPLAYED.txt", {
  encoding: "utf8",
  flag: "r",
});

// if bookmark for the audio files dont exist , create them
// filenames.forEach((element) => {
//   if (!fs.existsSync("./public/AUDIO/" + element + ".txt")) {
//     fs.writeFileSync("./public/AUDIO/" + element + ".txt", "Start,0" + "\n");
//   }
// });

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
    filename: filenames,
    lastPlayed,
  });
});

router.post("/", function (req, res, next) {
  console.log("here");
  let lastPlayed = req.body.filename;
  fs.writeFileSync("./public/LASTPLAYED.txt", lastPlayed);

  res.send(200);
});

module.exports = router;
