import express from "express";

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("Login route");
});

router.post("/verify", (req, res) => {
  res.send("Create User");
});

module.exports = router;
