const BASE_URL = "http://localhost:5000/api/groceries";

export async function fetchGroceries() {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function createGrocery(name) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  });
  if (!res.ok) throw new Error("Failed to create item");
  return res.json();
}

export async function toggleGrocery(id) {
  const res = await fetch(`${BASE_URL}/${id}/toggle`, { method: "PATCH" });
  if (!res.ok) throw new Error("Failed to toggle item");
  return res.json();
}

export async function deleteGrocery(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok && res.status !== 204) throw new Error("Failed to delete item");
}
