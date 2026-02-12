const { db } = require("../models/db");

function makeId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

// GET /api/groceries (authenticated)
function getAllGroceries(req, res) {
  // Example authorization policy:
  // - "admin" can see all groceries
  // - "user" sees only their own
  const isAdmin = req.user.role === "admin";

  const items = isAdmin
    ? db.groceries
    : db.groceries.filter((g) => g.createdBy === req.user.id);

  return res.json(items);
}

// POST /api/groceries (authenticated)
function createGrocery(req, res) {
  const { name } = req.body || {};
  if (!name) return res.status(400).json({ message: "name is required" });

  const item = {
    id: makeId(),
    name: String(name).trim(),
    createdBy: req.user.id,
    createdAt: new Date().toISOString(),
  };

  db.groceries.push(item);
  return res.status(201).json(item);
}

// DELETE /api/groceries/:id
// Example: only admin OR owner can delete
function deleteGrocery(req, res) {
  const { id } = req.params;

  const idx = db.groceries.findIndex((g) => g.id === id);
  if (idx === -1) return res.status(404).json({ message: "Not found" });

  const item = db.groceries[idx];

  const isAdmin = req.user.role === "admin";
  const isOwner = item.createdBy === req.user.id;

  if (!isAdmin && !isOwner) {
    return res.status(403).json({ message: "Forbidden" });
  }

  db.groceries.splice(idx, 1);
  return res.json({ ok: true });
}

module.exports = { getAllGroceries, createGrocery, deleteGrocery };
