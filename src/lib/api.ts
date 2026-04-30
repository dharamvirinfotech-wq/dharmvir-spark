// Axios-based API client. State is managed via Redux Toolkit (see src/store/authSlice.ts).
import api, { API_BASE_URL, tokenStore, userStore } from "./axios";

export { API_BASE_URL, tokenStore, userStore };

export type AuthUser = {
  id: number | string;
  full_name: string;
  email: string;
  phone?: string | null;
  role: "admin" | "editor" | "user" | "client" | "developer" | string;
  company_name?: string | null;
  status?: string;
  two_factor_enabled?: boolean;
};

export type AuthResponse = { token: string; user: AuthUser };

export const authApi = {
  login: (email: string, password: string) =>
    api.post<AuthResponse>("/auth/login", { email, password }).then((r) => r.data),

  register: (payload: {
    full_name: string;
    email: string;
    phone?: string;
    password: string;
    role?: string;
    company_name?: string;
    two_factor_enabled?: boolean;
  }) => api.post<AuthResponse>("/auth/register", payload).then((r) => r.data),

  me: () => api.get<{ user: AuthUser }>("/auth/me").then((r) => r.data),
};

export default api;
