const mongoose = require("mongoose");

const workflowSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "name is required"] },
    description: {
      type: String,
      required: [true, "description is required"],
      minlength: [10, "Workflow must be at least 10 characters long."],
      maxlength: [100, "Workflow must be at most 100 characters long."],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "category is required"],
    },
    status: {
      type: String,
      enum: ["Created", "Running"],
    },
    questions: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Question", default: [] },
    ],
  },
  { timestamps: true }
);

const Workflow = mongoose.model("Workflow", workflowSchema);

module.exports = Workflow;
