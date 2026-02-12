// client/api/groceryApi.js

const BASE_URL = "http://localhost:5000/api/groceries";

// Small helper so we don't repeat headers everywhere
function withAuthHeaders(token, extraHeaders = {}) {
  if (!token) throw new Error("Missing auth token. Please log in again.");
  return {
    ...extraHeaders,
    Authorization: `Bearer ${token}`,
  };
}

export async function fetchGroceries(token) {
  const res = await fetch(BASE_URL, {
    headers: withAuthHeaders(token),
  });

  if (!res.ok) throw new Error("Failed to fetch groceries");
  return res.json();
}

export async function createGrocery(name, token) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: withAuthHeaders(token, { "Content-Type": "application/json" }),
    body: JSON.stringify({ name }),
  });
