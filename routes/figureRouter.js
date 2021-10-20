const express = require("express");
const Figure = express.Router();

const figureControllers = require("../controllers/figurecontrollers");

Figure.get("/", figureControllers.GetFigure);
Figure.post("/", figureControllers.AddFigure);
Figure.delete("/:id", figureControllers.RemoveFigure);
module.exports = Figure;
