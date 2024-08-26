import express from "express";

import router from "./routes/AuthRoutes";
import connectDB from "./configs/db.config";

const app = express();
const port = 8080;

require("dotenv").config();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth-service", router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//Now, we will create a  Dockerfile  to build the Docker image for our service.
