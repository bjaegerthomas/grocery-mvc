// A tiny “Model layer” for now (in-memory).
// Later will replace these functions with DB calls.

let items = [];
let nextId = 1;

function getAll() {
  return items;
}

function create({ name }) {
  const item = { id: nextId++, name, purchased: false };
  items.push(item);
  return item;
}

function togglePurchased(id) {
  const item = items.find(i => i.id === id);
  if (!item) return null;
  item.purchased = !item.purchased;
  return item;
}

function remove(id) {
  const before = items.length;
  items = items.filter(i => i.id !== id);
  return items.length !== before;
}

module.exports = { getAll, create, togglePurchased, remove };
