const Question = require("./../models/questionModel");
const asyncHandler = require("express-async-handler");
const Workflow = require("./../models/workflowModel");
const AppError = require("./../utils/appError");

const createQuestion = asyncHandler(async (req, res, next) => {
  let question = {
    workflow: req.params.workflowId,
    name: req.body.name,
    isSkipped: req.body.isSkipped,
    category: req.body.category,
    answer: req.body.answer,
  };

  question = await Question.create(question);

  await Workflow.findByIdAndUpdate(
    question.workflow,
    { $push: { questions: question._id } }, // Push the new question's ID to the questions array
    { new: true } // Return the updated document
  );
  res.status(201).json({
    message: "success",
    data: { question },
  });
});

module.exports = { createQuestion };
