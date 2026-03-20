require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const SECRET = process.env.JWT_SECRET;
const users = []; // simple in-memory storage

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("JWT Authentication API is running");
});

// REGISTER
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const existing = users.find(u => u.username === username);
  if (existing) return res.status(400).json({ message: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);
  users.push({ username, password: hashed });

  res.json({ message: "User registered successfully" });
});