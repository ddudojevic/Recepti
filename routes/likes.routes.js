const express = require("express");
const router = express.Router();

const likeController = require("../controllers/like.controllers");

router.post("/recepti/:id/like", likeController.postLikes);

module.exports = router;