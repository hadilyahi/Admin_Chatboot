const asyncHandler = require("express-async-handler");
const Faq = require("./../models/faqModel");
const AppError = require("./../utils/appError");

const getFaqs = asyncHandler(async (req, res) => {
  const faqs = await Faq.find();
  res.status(200).json({
    status: "success",
    results: faqs.length,
    data: { faqs },
  });
});

const createFaq = asyncHandler(async (req, res, next) => {
  const { question, answer } = req.body;
  if (!question || !answer) {
    return next(
      new AppError("please provide the question and its answer", 400)
    );
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
    return next(new AppError("No question has been provided", 404));
  }

  const faq = await Faq.findOne({ question });

  if (!faq) {
    return next(new AppError("Question not found!", 404));
  }

  res.status(200).json({
    status: "success",
    data: { faq },
  });
});

module.exports = { getFaqs, createFaq, getFaq };
