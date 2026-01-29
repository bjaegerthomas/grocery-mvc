import { useEffect, useState } from "react";
import GroceryForm from "../components/GroceryForm";
import GroceryList from "../components/GroceryList";
import {
  fetchGroceries,
  createGrocery,
  toggleGrocery,
  deleteGrocery
} from "../api/groceryApi";

export default function HomePage() {
  const [items, setItems] = useState([]);

  async function load() {
    const data = await fetchGroceries();
    setItems(data);
  }

  useEffect(() => {
    load();
  }, []);

  async function handleAdd(name) {
    await createGrocery(name);
    await load();
  }

  async function handleToggle(id) {
    await toggleGrocery(id);
    await load();
  }

  async function handleDelete(id) {
    await deleteGrocery(id);
    await load();
  }

  return (
    <div>
      <h1>Grocery List</h1>
      <GroceryForm onAdd={handleAdd} />
      <GroceryList items={items} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}
