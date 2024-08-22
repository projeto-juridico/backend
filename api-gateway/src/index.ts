import express, { Request, Response } from "express";
import routes from "./routes/index";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("API Gateway is up and running!1");
});

app.listen(PORT, () => {
  console.log(`API Gateway running on http://localhost:${PORT}`);
});
