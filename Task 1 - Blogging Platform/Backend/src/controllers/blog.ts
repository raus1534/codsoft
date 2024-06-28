import { RequestWithFiles } from "#/middlewares/fileParser";
import { categoriesTypes } from "#/utils/category";
import { RequestHandler } from "express";
import Blog, { BlogDocument } from "#/models/Blog";
import formidable from "formidable";
import cloudinary from "#/cloud";
import { isValidObjectId } from "mongoose";

interface CreateBlogRequest extends RequestWithFiles {
  body: {
    title: string;
    content: string;
    category: categoriesTypes;
  };
}

export const createBlog: RequestHandler = async (
  req: CreateBlogRequest,
  res
) => {
  const { title, content, category } = req.body;
  const poster = req.files?.poster as formidable.File;
  const ownerId = req.user.id;

  if (!poster) return res.status(422).json({ error: "Poster is missing!" });

  const newBlog = new Blog({
    owner: ownerId,
    title,
    content,
    category,
  });

  const posterRes = await cloudinary.uploader.upload(poster.filepath, {
    width: 300,
    height: 300,
  });

  newBlog.poster = {
    url: posterRes.secure_url,
    publicId: posterRes.public_id,
  };

  await newBlog.save();

  res.status(201).json({
    message: "Blog Published Successfully",
  });
};

export const updateBlog: RequestHandler = async (
  req: CreateBlogRequest,
  res
) => {
  const { title, content, category } = req.body;
  const poster = req.files?.poster as formidable.File;
  const ownerId = req.user.id;
  const { blogId } = req.params;

  const blog = await Blog.findOneAndUpdate(
    { owner: ownerId, _id: blogId },
    { title, content, category },
    { new: true }
  );

  if (!blog) return res.status(404).json({ error: "Blog Not Found" });

  if (poster) {
    if (blog.poster?.publicId) {
      await cloudinary.uploader.destroy(blog.poster.publicId);
    }

    const posterRes = await cloudinary.uploader.upload(poster.filepath, {
      width: 300,
      height: 300,
    });

    blog.poster = {
      url: posterRes.secure_url,
      publicId: posterRes.public_id,
    };

    await blog.save();
  }

  res.status(201).json({
    message: "Blog Updated Successfully",
  });
};
export const getUserBlog: RequestHandler = async (req, res) => {
  const { userId } = req.params;
  if (!isValidObjectId(userId))
    return res.status(403).json({ error: "Invalid request!" });

  const blogs = await Blog.find({ userId }).select(
    "title content poster _id createdAt category"
  );

  res.status(201).json({
    blogs,
  });
};
