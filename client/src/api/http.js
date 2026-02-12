const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

export async function http(path, options = {}, token = null) {
  const headers = new Headers(options.headers || {});

  // Only set JSON header if body exists
  if (options.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || `Request failed with ${res.status}`);
  }

  // Handle 204 No Content
  if (res.status === 204) return null;

  return res.json();
}
