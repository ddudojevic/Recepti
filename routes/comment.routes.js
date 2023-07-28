const express = require("express");
const router = express.Router();

const commentController = require("../controllers/comment.controllers");

router.post("/recepti/:id/comment", commentController.postComment);

module.exports = router;