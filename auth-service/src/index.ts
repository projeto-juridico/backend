import express from "express";
const userRouter = require("./routes/User");
const app = express();
const port = 8080;

require("dotenv").config();
app.use("/auth-service/user", userRouter);

app.get("/auth-service", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//Now, we will create a  Dockerfile  to build the Docker image for our service.
