import { RequestWithFiles } from "#/middlewares/fileParser";
import { categoriesTypes } from "#/utils/category";
import { RequestHandler } from "express";
import Blog, { BlogDocument } from "#/models/Blog";
import formidable from "formidable";
import cloudinary from "#/cloud";
import { isValidObjectId } from "mongoose";
import Comment from "#/models/Comment";

interface CreateCommentRequest extends RequestWithFiles {
  body: {
    blog: string;
    comment: string;
  };
}

export const createComment: RequestHandler = async (
  req: CreateCommentRequest,
  res
) => {
  const { blog, comment } = req.body;
  const ownerId = req.user.id;

  if (!isValidObjectId(blog))
    return res.status(422).json({ error: "Invalid Blog" });

  const isExisting = await Comment.findOne({ owner: ownerId });
  if (isExisting)
    return res.status(422).json({ error: "Comment Already Exist" });
  const newComment = await Comment.create({
    owner: ownerId,
    comment,
    blog,
  });

  res.status(201).json({
    comment: newComment,
  });
};

export const updateComment: RequestHandler = async (
  req: CreateCommentRequest,
  res
) => {
  const { comment } = req.body;
  const { commentId } = req.params;

  const commentUpdated = await Comment.findOneAndUpdate(
    { _id: commentId },
    { comment },
    { new: true }
  );

  if (!commentUpdated)
    return res.status(404).json({ error: "Comment Not Found" });

  res.status(201).json({
    message: "Comment Updated Successfully",
  });
};
export const getComments: RequestHandler = async (req, res) => {
  const { blogId } = req.params;
  if (!isValidObjectId(blogId))
    return res.status(403).json({ error: "Invalid request!" });

  const comments = await Comment.find({ blog: blogId })
    .select("comment owner createdAt")
    .populate({
      path: "owner",
      select: "name avatar.url", // Select the fields you need
    });

  res.status(201).json({
    comments,
  });
};
