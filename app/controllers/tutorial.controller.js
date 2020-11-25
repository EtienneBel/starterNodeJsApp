const db = require("../models");
const Tutorial = db.tutorials;

const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.createTutorial = (req, res) => {
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
  };

  return Tutorial.create(tutorial)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
    });
};

// Get all Tutorials include comments
exports.findAllTutorials = (req, res) => {
  return Tutorial.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// // Get the comments for a given tutorial
// exports.findTutorialById = (tutorials_id) => {
//   return Tutorial.findTutorialById(tutorials_id, {
//     include: ["comments"],
//   })
//     .then((tutorial) => {
//       return tutorial;
//     })
//     .catch((err) => {
//       console.log(">> Error while finding tutorial: ", err);
//     });
// };

// // Get the comments for a given comment id
// exports.findCommentById = (id) => {
//   return Comment.findByPk(id, { include: ["tutorial"] })
//     .then((comment) => {
//       return comment;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
