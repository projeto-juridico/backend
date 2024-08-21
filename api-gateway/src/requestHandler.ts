import { Request, Response } from "express";
import axios, { Method } from "axios";

export const handleRequest = async (
  req: Request,
  res: Response,
  serviceUrl: string
) => {
  const method = req.method as Method;

  try {
    const response = await axios({
      url: `${serviceUrl}${req.url}`,
      method,
      data: req.body,
      headers: req.headers,
      params: req.query,
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json({
        error: error.response?.data || "Service unavailable",
      });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};
