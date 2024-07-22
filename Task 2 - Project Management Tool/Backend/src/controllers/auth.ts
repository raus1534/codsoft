import User, { UserDocument } from "#/models/User";
import jwt from "jsonwebtoken";
import { RequestHandler } from "express";
import { JWT_SECRET } from "#/utils/envs";
import { departments } from "#/utils/department";

export const signIn: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    email,
  });
  if (!user)
    return res
      .status(403)
      .json({ error: "The email and password do not match." });

  const matched = await user.comparePassword(password);
  if (!matched)
    return res
      .status(403)
      .json({ error: "The email and password do not match." });

  const token = jwt.sign({ userId: user._id }, JWT_SECRET);

  await user.save();

  res.json({
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar?.url,
      department: user.department,
      token,
    },
  });
};

export const sendProfile: RequestHandler = (req, res) => {
  res.json({ user: req.user });
};

interface CategorizedUsers {
  [key: string]: { id: string; name: string }[];
}

export const getAllUser: RequestHandler = async (req, res) => {
  // Fetch all users from the database
  const users = await User.find().exec();

  // Initialize the result object with empty arrays for each department
  const categorizedUsers: CategorizedUsers = departments.reduce(
    (acc, department) => {
      acc[department] = [];
      return acc;
    },
    {} as CategorizedUsers
  );

  // Populate the categorizedUsers object with name and _id
  users.forEach((user) => {
    const department = user.department;
    if (categorizedUsers[department]) {
      categorizedUsers[department].push({
        id: user._id.toString(), // Convert ObjectId to string
        name: user.name,
      });
    }
  });

  // Remove empty departments from the result
  const result = Object.fromEntries(
    Object.entries(categorizedUsers).filter(([_, users]) => users.length > 0)
  );

  res.status(200).json(result);
};
