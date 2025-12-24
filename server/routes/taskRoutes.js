import express from "express";
import {
  createTask,
  getProjectTasks,
  updateTask,
  deleteTask
} from "../controllers/taskController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createTask);
router.get("/project/:projectId", protect, getProjectTasks);
router.put("/:taskId/status", protect, updateTask);
router.patch("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);

export default router;