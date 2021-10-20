const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Figure = require("./routes/figureRouter");
var cors = require("cors");
const app = express();
app.use(cors());

mongoose.connect("mongodb://localhost/db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("DB LUNCH SUCCESFULY");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/characters", Figure);
app.listen(8080, () => console.log("API RUNNING IN PORT 8080"));
