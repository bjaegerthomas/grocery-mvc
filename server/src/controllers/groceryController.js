const Grocery = require("../models/groceryModel");

function listItems(req, res) {
  res.json(Grocery.getAll());
}

function addItem(req, res) {
  const { name } = req.body;
  if (!name || !name.trim()) {
    return res.status(400).json({ error: "Name is required" });
  }
  const created = Grocery.create({ name: name.trim() });
  res.status(201).json(created);
}

function toggleItem(req, res) {
  const id = Number(req.params.id);
  const updated = Grocery.togglePurchased(id);
  if (!updated) return res.status(404).json({ error: "Item not found" });
  res.json(updated);
}

function deleteItem(req, res) {
  const id = Number(req.params.id);
  const ok = Grocery.remove(id);
  if (!ok) return res.status(404).json({ error: "Item not found" });
  res.status(204).send();
}

module.exports = { listItems, addItem, toggleItem, deleteItem };
