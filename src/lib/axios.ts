import axios from "axios";

export const API_BASE_URL =
  (import.meta.env.VITE_API_URL as string) || "http://localhost:8080/api";

const TOKEN_KEY = "dv_auth_token";
const USER_KEY = "dv_auth_user";

export const tokenStore = {
  get: () => localStorage.getItem(TOKEN_KEY),
  set: (t: string) => localStorage.setItem(TOKEN_KEY, t),
  clear: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },
};

export const userStore = {
  get: <T = unknown>(): T | null => {
    const raw = localStorage.getItem(USER_KEY);
    try {
      return raw ? (JSON.parse(raw) as T) : null;
    } catch {
      return null;
    }
  },
  set: (u: unknown) => localStorage.setItem(USER_KEY, JSON.stringify(u)),
};

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Attach JWT to every request
api.interceptors.request.use((config) => {
  const token = tokenStore.get();
  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }
  return config;
});

// Normalize errors so thunks can read .message reliably
api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response) {
      const data = error.response.data;
      const message =
        (data && typeof data === "object" && (data.message || data.errors?.[0]?.msg)) ||
        (typeof data === "string" && data) ||
        `Request failed (${error.response.status})`;
      return Promise.reject(new Error(message));
    }
    if (error.request) {
      return Promise.reject(
        new Error(`Cannot reach API at ${API_BASE_URL}. Is the backend running?`)
      );
    }
    return Promise.reject(error);
  }
);

export default api;
