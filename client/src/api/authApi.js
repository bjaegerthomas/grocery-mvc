// client/api/authApi.js

import { http } from "./http";

/**
 * POST /api/auth/register
 */
export function register(email, password) {
  return http("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

/**
 * POST /api/auth/login
 */
export function login(email, password) {
  return http("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

/**
 * GET /api/auth/me
 * Requires token
 */
export function getCurrentUser(token) {
  return http("/api/auth/me", {}, token);
}
