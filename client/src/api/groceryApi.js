// client/api/groceryApi.js

import { http } from "./http";

export function fetchGroceries(token) {
  return http("/api/groceries", {}, token);
}

export function createGrocery(name, token) {
  return http(
    "/api/groceries",
    {
      method: "POST",
      body: JSON.stringify({ name }),
    },
    token
  );
}

export function toggleGrocery(id, token) {
  return http(
    `/api/groceries/${id}/toggle`,
    {
      method: "PATCH",
    },
    token
  );
}

export function deleteGrocery(id, token) {
  return http(
    `/api/groceries/${id}`,
    {
      method: "DELETE",
    },
    token
  );
}
