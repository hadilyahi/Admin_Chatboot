const express = require("express");
const faqRoutes = require("./routes/faqRoutes");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const globalErrorHandling = require("./controllers/errorController");

dotenv.config({ path: ".env" });

const app = express();

// Parsing Incoming Data
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1/faqs", faqRoutes);

// Global Error Handling Middleware
app.use(globalErrorHandling);

module.exports = app;
