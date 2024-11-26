const asyncHandler = require("express-async-handler");
const AppError = require("./../utils/appError");
const Workflow = require("./../models/workflowModel");

const getWorkflows = asyncHandler(async (req, res) => {
  let workflows = await Workflow.find().lean();
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

module.exports = {
  getWorkflows,
  createWorkflow,
  deleteWorkflow,
  updateWorkflow,
};
