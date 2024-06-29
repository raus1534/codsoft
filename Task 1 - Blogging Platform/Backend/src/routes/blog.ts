import {
  createBlog,
  deleteBlog,
  getSpecificBlog,
  getUserBlog,
  updateBlog,
} from "#/controllers/blog";
import { isAuth, isVerified } from "#/middlewares/auth";
import fileParser from "#/middlewares/fileParser";
import { validate } from "#/middlewares/validator";
import { BlogValidationSchema } from "#/utils/validationSchema";
import { Router } from "express";

const router = Router();

router.post(
  "/create",
  isAuth,
  isVerified,
  fileParser,
  validate(BlogValidationSchema),
  createBlog
);
router.patch(
  "/:blogId",
  isAuth,
  isVerified,
  fileParser,
  validate(BlogValidationSchema),
  updateBlog
);
router.get("/user/:userId", getUserBlog);
router.get("/single/:blogId", getSpecificBlog);
router.delete("/:blogId", isAuth, isVerified, deleteBlog);

export default router;
