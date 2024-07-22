import User from "#/models/User";
import jwt from "jsonwebtoken";
import { RequestHandler } from "express";
import { JWT_SECRET } from "#/utils/envs";

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
