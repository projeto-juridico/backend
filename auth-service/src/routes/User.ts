import e from "express";
import express from "express";

const UserController = require("../controllers/Login/Login");
const router = express.Router();

router.get("/login", UserController.login);

router.post("/create", (req, res) => {
  res.send("Create User");
});

router.post("/forgot-password", (req, res) => {
  res.send("Forgot Password");
});

router.put("/update-password", (req, res) => {
  res.send("Update Password");
});

module.exports = router;
