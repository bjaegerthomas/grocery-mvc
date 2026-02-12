const bcrypt = require("bcryptjs");
const { db } = require("../models/db");
const { signToken } = require("../utils/jwt");

// simple id helper for in-memory usage
function makeId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

async function register(req, res) {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const existing = db.users.find((u) => u.email === normalizedEmail);
    if (existing) return res.status(409).json({ message: "Email already in use" });

    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
      id: makeId(),
      email: normalizedEmail,
      passwordHash,
      role: "user", // default role
    };

    db.users.push(user);

    const token = signToken({ id: user.id, email: user.email, role: user.role });

    return res.status(201).json({
      token,
      user: { id: user.id, email: user.email, role: user.role },
    });
  } catch (e) {
    return res.status(500).json({ message: "Register failed" });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const user = db.users.find((u) => u.email === normalizedEmail);
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });

    const token = signToken({ id: user.id, email: user.email, role: user.role });

    return res.json({
      token,
      user: { id: user.id, email: user.email, role: user.role },
    });
  } catch (e) {
    return res.status(500).json({ message: "Login failed" });
  }
}

function me(req, res) {
  // requireAuth sets req.user
  return res.json({ user: req.user });
}

module.exports = { register, login, me };
