const asyncHandler = require("express-async-handler");
const AppError = require("./../utils/appError");
const Workflow = require("./../models/workflowModel");
const Question = require("../models/questionModel");

const getWorkflows = asyncHandler(async (req, res) => {
  let workflows = await Workflow.find().populate("questions").lean();
  workflows = workflows.map((workflow, index) => ({
    ...workflow,
    displayId: index + 1,
  }));
  res.status(200).json({
    status: "success",
    results: workflows.length,
    data: { workflows },
  });
});

const getOneWorkflow = asyncHandler(async (req, res, next) => {
  const workflowId = req.params.workflowId;
  const workflow = await Workflow.findById(workflowId).populate("questions");

  if (!workflow) {
    return next(new AppError("error fetching the workflow", 404));
  }

  res.status(200).json({
    status: "success",
    data: { workflow },
  });
});

const createWorkflow = asyncHandler(async (req, res, next) => {
  const { name, description, status } = req.body;
  if ((!name || !description, !status)) {
    return next(
      new AppError("please provide name, description and status", 400)
    );
  }

  const workflow = await Workflow.create({ name, description, status });

  res.status(201).json({
    status: "success",
    data: { workflow },
  });
});

const deleteWorkflow = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const workflow = await Workflow.findById(id);
  if (!workflow) {
    return next(new AppError(`No workflow found with id: ${id}`, 404));
  }
  await Workflow.findByIdAndDelete(id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});

const updateWorkflow = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const workflow = Workflow.findById(id);
  if (!workflow) {
    return next(new AppError(`No workflow found with id: ${id}`, 404));
  }
  const updatedWorkflow = await Workflow.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      updatedWorkflow,
    },
  });
});

const deleteWorkflows = asyncHandler(async (req, res) => {
  await Workflow.deleteMany();
  res.status(204).json({
    status: "success",
    data: null,
  });
});

// CHATBOT
const getChatbotWorkflow = asyncHandler(async (req, res, next) => {
  const { workflowName } = req.body;

  if (!workflowName) {
    return next(new AppError("please specify the workflow name", 400));
  }

  const workflow = await Workflow.findOne({ name: workflowName }).populate(
    "questions"
  );

  res.status(200).json({ status: "success", data: { workflow } });
});

const getChatbotAnswer = asyncHandler(async (req, res, next) => {
  const { question } = req.body;
  if (!question) {
    return next(
      new AppError("please specify the question to get the answer", 400)
    );
  }
  const result = await Question.findOne({ name: question });

  if (!result) {
    return next(
      new AppError(`No results has found with this question: ${question}`, 400)
    );
  }

  res.status(200).json({
    status: "succcess",
    data: { result },
  });
});

module.exports = {
  getWorkflows,
  createWorkflow,
  deleteWorkflow,
  updateWorkflow,
  deleteWorkflows,
  getOneWorkflow,
  getChatbotWorkflow,
  getChatbotAnswer,

};
