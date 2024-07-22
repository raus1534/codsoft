import { createUser } from "#/controllers/admin";
import {
  createTask,
  deleteTask,
  getOngoingTasks,
  markTaskAsCompleted,
  updateTask,
} from "#/controllers/task";
import { isAdmin, isAuth } from "#/middlewares/auth";
import { validate } from "#/middlewares/validator";
import { CreateTaskSchema } from "#/utils/validationSchema";
import { Router } from "express";

const routes = Router();

routes.post(
  "/createTask",
  isAuth,
  isAdmin,
  validate(CreateTaskSchema),
  createTask
);
routes.patch(
  "/updateTask/:taskId",
  isAuth,
  isAdmin,
  validate(CreateTaskSchema),
  updateTask
);
routes.patch(
  "/markTaskAsCompleted/:taskId",
  isAuth,
  isAdmin,
  markTaskAsCompleted
);

routes.get("/getOngoingTask", isAuth, isAdmin, getOngoingTasks);
routes.delete("/deleteTask/:taskId", isAuth, isAdmin, deleteTask);

export default routes;
