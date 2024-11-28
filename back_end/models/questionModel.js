const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    workflow: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workflow",
      required: [true, "please specify the workflow of the question"],
    },
    name: {
      type: String,
      required: [true, "a question must have a name"],
    },
    category: {
      type: String,
      required: [true, "a question must belongs to a category"],
    },
    isSkipped: {
      type: Boolean,
      required: true,
    },
    answer: {
      type: String,
      required: [true, "A question must have an answer"],
    },
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
