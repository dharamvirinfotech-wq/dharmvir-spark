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

export type ContactInquiry = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  service: string | null;
  message: string;
  status: "new" | "replied" | "closed";
  admin_notes: string | null;
  created_at: string;
  updated_at: string;
};

export type InquiryCounts = {
  total: number;
  new_count: number;
  replied_count: number;
  closed_count: number;
};

export const contactApi = {
  submit: (payload: {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    service?: string;
    message: string;
  }) => api.post<{ id: number; message: string }>("/contact", payload).then((r) => r.data),

  list: (params?: { status?: string; service?: string; search?: string }) =>
    api
      .get<{ inquiries: ContactInquiry[]; counts: InquiryCounts }>("/contact", { params })
      .then((r) => r.data),

  get: (id: number) =>
    api.get<{ inquiry: ContactInquiry }>(`/contact/${id}`).then((r) => r.data),

  update: (id: number, payload: { status?: string; admin_notes?: string }) =>
    api.patch<{ inquiry: ContactInquiry }>(`/contact/${id}`, payload).then((r) => r.data),

  remove: (id: number) =>
    api.delete<{ message: string }>(`/contact/${id}`).then((r) => r.data),
};

export default api;
