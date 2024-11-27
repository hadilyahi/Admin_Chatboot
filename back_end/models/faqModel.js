const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
  id: Number,
  question: {
    type: String,
    required: [true, "question is required"],
    unique: true,
  },
  answer: {
    type: String,
    required: [true, "answer is required"],
  },
});

const Faq = mongoose.model("Faq", faqSchema);

module.exports = Faq;
