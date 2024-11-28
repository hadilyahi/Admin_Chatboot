const express = require("express");
const { createQuestion } = require("./../controllers/questionController");
const router = express.Router();

router.post("/create-question/:workflowId", createQuestion);

module.exports = router;
