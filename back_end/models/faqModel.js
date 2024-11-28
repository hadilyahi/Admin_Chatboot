const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "question is required"],
  },
  answer: {
    type: String,
    required: [true, "answer is required"],
  },
});

const Faq = mongoose.model("Faq", faqSchema);

module.exports = Faq;
