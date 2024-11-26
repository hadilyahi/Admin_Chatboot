const express = require("express");
const {
  getWorkflows,
  deleteWorkflow,
  createWorkflow,
  updateWorkflow,
} = require("./../controllers/workflowController");

const router = express.Router();

router.get("/get-workflows", getWorkflows);
router.post("/create-workflow", createWorkflow);
router.delete("/delete-workflow/:id", deleteWorkflow);
router.patch("/update-workflow/:id", updateWorkflow);

module.exports = router;
