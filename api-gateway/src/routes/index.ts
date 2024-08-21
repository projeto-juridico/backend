import { Router } from "express";
import { handleRequest } from "../requestHandler";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

const SERVICE_1_URL = process.env.AUTH_SERVICE as string;

router.all("/auth-service*", (req, res) => {
  handleRequest(req, res, SERVICE_1_URL)
});

export default router;
