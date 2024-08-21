import express, { Request, Response } from "express";
import routes from "./routes/index";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

console.log(process.env.AUTH_SERVICE)

app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`API Gateway running on http://localhost:${PORT}`);
});
