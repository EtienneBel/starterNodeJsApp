module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller");
  const comments = require("../controllers/comment.controller");
  const tags = require("../controllers/tag.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/tutorials", tutorials.createTutorial);

  // Retrieve all Tutorials
  router.get("/tutorials", tutorials.findAllTutorials);

  // ##########################

  // Create a new Comment
  router.post("/comments", comments.createComment);

  // Retrieve all Tutorials
  router.get("/comments", comments.findAllComments);

  // ##########################

  // Create a new Comment
  router.post("/tags", tags.createTag);

  // Find all Tags
  router.get("/tags", tags.findAllTags);

  // Add a Tutorial to a Tag
  router.post("/tutorialToTag", tags.addTutorial);

  //

  app.use("/api", router);
};
