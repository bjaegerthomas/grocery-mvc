import { useState } from "react";

export default function GroceryForm({ onAdd }) {
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    await onAdd(name.trim());
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add grocery item..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
