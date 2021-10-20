const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const figure = new Schema({
  height: {
    type: "string",
  },
  race: {
    type: "string",
  },
  gender: {
    type: "string",
  },
  birth: {
    type: "string",
  },
  spouse: {
    type: "string",
  },
  death: {
    type: "string",
  },
  realm: {
    type: "string",
  },
  hair: {
    type: "string",
  },
  name: {
    type: "string",
    required: "file is required",
  },
  wikiUrl: {
    type: "string",
  },
});

const newFigure = Mongoose.model("Figure", figure);
module.exports = newFigure;
