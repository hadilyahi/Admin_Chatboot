const asyncHandler = require("express-async-handler");
const Faq = require("./../models/faqModel");

const getFaqs = asyncHandler(async (req, res) => {
  const faqs = await Faq.find();
  res.status(200).json({
    status: "success",
    results: faqs.length,
    data: { faqs },
  });
});

const createFaq = asyncHandler(async (req, res) => {
  const { question, answer } = req.body;
  if (!question || !answer) {
    return res.status(400).json({
      status: "error",
      message: "please provide the question and its answer",
    });
  }

  const faq = await Faq.create({ question, answer });

  res.status(201).json({
    status: "success",
    data: { faq },
  });
});

const getFaq = asyncHandler(async (req, res) => {
  const { question } = req.body;
  console.log(question);

  if (!question) {
    return res.status(404).json({
      status: "error",
      message: "No question has been provided",
    });
  }

  const faq = await Faq.findOne({ question });

  if (!faq) {
    return res.status(404).json({
      status: "error",
      message: "Question not found!",
    });
  }

  res.status(200).json({
    status: "success",
    data: { faq },
  });
});

module.exports = { getFaqs, createFaq, getFaq };
