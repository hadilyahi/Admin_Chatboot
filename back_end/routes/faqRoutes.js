const express = require("express");
const {
  getFaqs,
  getFaq,
  createFaq,
} = require("./../controllers/faqController");

const router = express.Router();

router.get("/get-faqs", getFaqs);
router.post("/get-faq", getFaq);

module.exports = router;
