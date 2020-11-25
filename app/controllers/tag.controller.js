const db = require("../models");
const Tag = db.tags;
const Tutorial = db.tutorials;

const Op = db.Sequelize.Op;

// Create and Save a new Tag
exports.createTag = (req, res) => {
  const tag = {
    name: req.body.name,
  };

  return Tag.create(tag)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
    });
};

// Add a Tutorial to a Tag
exports.addTutorial = (req, res) => {
  const tutorialToTag = {
    tagId: req.body.tagId,
    tutorialId: req.body.tutorialId,
  };

  return Tag.findByPk(tutorialToTag.tagId)
    .then((tag) => {
      if (!tag) {
        console.log("Tag not found!");
        return null;
      }
      return Tutorial.findByPk(tutorialToTag.tutorialId).then((tutorial) => {
        if (!tutorial) {
          console.log("Tutorial not found!");
          return null;
        }

        tag.addTutorial(tutorial);
        console.log(`>> added Tutorial id=${tutorial.id} to Tag id=${tag.id}`);
        return tag;
      });
    })
    .catch((err) => {
      console.log(">> Error while adding Tutorial to Tag: ", err);
    });
};

// Find all Tags
exports.findAllTags = (req, res) => {
  return Tag.findAll({
    include: [
      {
        model: Tutorial,
        as: "tutorials",
        attributes: ["id", "title", "description"],
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(">> Error while retrieving Tags: ", err);
    });
};
