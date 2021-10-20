const newFigure = require("../models");

const AddFigure = async (req, res) => {
  try {
    const {
      height,
      race,
      gender,
      birth,
      spouse,
      death,
      realm,
      hair,
      name,
      wikiUrl,
    } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ msg: "INFORMATION MISSING (NAME), PLEASE CHECK YOUR REQUEST" });
    }
    const figure = new newFigure();
    figure.height = height;
    figure.race = race;
    figure.gender = gender;
    figure.birth = birth;
    figure.spouse = spouse;
    figure.death = death;
    figure.realm = realm;
    figure.hair = hair;
    figure.name = name;
    figure.wikiUrl = wikiUrl;
    const result = await figure.save();
    if (!result) {
      console.log("probleme resulte");
      return res
        .status(400)
        .json({ msg: "INFORMATION MISSING, PLEASE CHECK YOUR REQUEST" });
    }
    res.status(200).json({ msg: "NAME ADDED SUCCESSFULY", result });
  } catch (error) {
    return res.status(500).json({ msg: "INTERNAM SERVER ERROR!" });
  }
};

const GetFigure = async (req, res) => {
  try {
    const result = await newFigure.find();
    res.status(201).json({ msg: "GET SUCCEFULLY", result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "INTERNAL SERVER ERROR !" });
  }
};

const RemoveFigure = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res
        .status(400)
        .json({ msg: "ID MISSING, PLEASE CHECK YOUR REQUEST" });
    const result = await newFigure.deleteOne({ _id: id });
    if (!result) return res.status(400).json({ msg: "ERROR NO RESULT" });
    return res.status(200).json({ msg: "DELET SUCCEFULLY", result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "INTERNAL SERVER ERROR !" });
  }
};

module.exports = {
  AddFigure,
  GetFigure,
  RemoveFigure,
};
