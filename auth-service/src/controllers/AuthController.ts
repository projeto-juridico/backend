import { Request, Response } from "express";
import AuthService from "../services/AuthService";

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const user = await AuthService.register(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: "Error registering user", error });
    }
  }
  async login(req: Request, res: Response) {
    try {
      const user = await AuthService.login(req.body.email, req.body.password);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: "Error logging in", error });
    }
  }
  async verify(req: Request, res: Response) {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "Token not provided" });
      }

      const decoded = AuthService.verifyToken(token);
      return res.status(200).json(decoded);
    } catch (error) {
      return res.status(401).json({ message: "Invalid token", error });
    }
  }
}

export default new AuthController();
