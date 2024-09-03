import express from "express";
import routes from "./routes/routes";
const app = express();
const port = 8082;

require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user-service", routes);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
