import { categories, categoriesTypes } from "#/utils/category";
import { compare, hash } from "bcrypt";
import { Model, model, ObjectId, Schema } from "mongoose";

export interface BlogDocument {
  _id: ObjectId;
  owner: ObjectId;
  title: string;
  content: string;
  poster?: { url: string; publicId: string };
  category: categoriesTypes;
}
interface Methods {
  comparePassword(password: string): Promise<boolean>;
}

const blogSchema = new Schema<BlogDocument, {}, Methods>(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    poster: {
      type: Object,
      url: String,
      publicId: String,
    },
    category: {
      type: String,
      required: true,
      enum: categories,
    },
  },
  { timestamps: true }
);

export default model("Blog", blogSchema) as Model<BlogDocument, {}, Methods>;
