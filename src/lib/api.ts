// API client for backend at http://localhost:8080/api
export const API_BASE_URL =
  (import.meta.env.VITE_API_URL as string) || "http://localhost:8080/api";

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
  get: (): AuthUser | null => {
    const raw = localStorage.getItem(USER_KEY);
    try {
      return raw ? (JSON.parse(raw) as AuthUser) : null;
    } catch {
      return null;
    }
  },
  set: (u: AuthUser) => localStorage.setItem(USER_KEY, JSON.stringify(u)),
};

async function request<T>(
  path: string,
  options: RequestInit = {},
  auth = false
): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...((options.headers as Record<string, string>) || {}),
  };
  if (auth) {
    const token = tokenStore.get();
    if (token) headers.Authorization = `Bearer ${token}`;
  }

  let res: Response;
  try {
    res = await fetch(`${API_BASE_URL}${path}`, { ...options, headers });
  } catch (err) {
    throw new Error(
      `Cannot reach API at ${API_BASE_URL}. Is the backend running?`
    );
  }

  const contentType = res.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await res.json().catch(() => ({}))
    : await res.text();

  if (!res.ok) {
    const message =
      (data && typeof data === "object" && (data as any).message) ||
      (data && typeof data === "object" && (data as any).errors?.[0]?.msg) ||
      (typeof data === "string" && data) ||
      `Request failed (${res.status})`;
    throw new Error(message);
  }

  return data as T;
}

export const authApi = {
  login: (email: string, password: string) =>
    request<AuthResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  register: (payload: {
    full_name: string;
    email: string;
    phone?: string;
    password: string;
    role?: string;
    company_name?: string;
    two_factor_enabled?: boolean;
  }) =>
    request<AuthResponse>("/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  me: () => request<{ user: AuthUser }>("/auth/me", {}, true),
};
