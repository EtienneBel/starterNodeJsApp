const db = require("../models");
const Comment = db.comments;

const Op = db.Sequelize.Op;

// Create and Save new Comments
exports.createComment = (req, res) => {
  const comment = {
    name: req.body.name,
    text: req.body.text,
    tutorialId: req.body.tutorialId,
  };

  return Comment.create(comment)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
    });
};

// Get all Comments include comments
exports.findAllComments = (req, res) => {
    return Comment.findAll({
      include: ["tutorial"],
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  