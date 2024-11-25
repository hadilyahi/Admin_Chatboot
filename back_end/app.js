const express = require("express");
const faqRoutes = require("./routes/faqRoutes");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config({ path: ".env" });

const app = express();

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1/faqs", faqRoutes);

module.exports = app;
