import express from "express";
import UserService from "../../services/UserService";

const jwt = require("jsonwebtoken");

export const login = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await UserService.validUser(email, password);
    const token = jwt.sign(
      { user: user?.email, role: user?.role },
      process.env.SECRET,
      {
        expiresIn: 3600,
      }
    );
    res.status(200).json({ token: token, expiresIn: 3600 });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }
};
