import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { authApi, tokenStore, userStore, AuthUser } from "@/lib/api";

type AuthState = {
  user: AuthUser | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<AuthUser>;
  register: (payload: Parameters<typeof authApi.register>[0]) => Promise<AuthUser>;
  logout: () => void;
  hasRole: (...roles: string[]) => boolean;
};

const AuthContext = createContext<AuthState | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(() => userStore.get());
  const [token, setToken] = useState<string | null>(() => tokenStore.get());
  const [loading, setLoading] = useState<boolean>(!!tokenStore.get());

  useEffect(() => {
    let cancelled = false;
    const t = tokenStore.get();
    if (!t) {
      setLoading(false);
      return;
    }
    authApi
      .me()
      .then((res) => {
        if (cancelled) return;
        userStore.set(res.user);
        setUser(res.user);
      })
      .catch(() => {
        if (cancelled) return;
        tokenStore.clear();
        setUser(null);
        setToken(null);
      })
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, []);

  const login: AuthState["login"] = async (email, password) => {
    const res = await authApi.login(email, password);
    tokenStore.set(res.token);
    userStore.set(res.user);
    setToken(res.token);
    setUser(res.user);
    return res.user;
  };

  const register: AuthState["register"] = async (payload) => {
    const res = await authApi.register(payload);
    tokenStore.set(res.token);
    userStore.set(res.user);
    setToken(res.token);
    setUser(res.user);
    return res.user;
  };

  const logout = () => {
    tokenStore.clear();
    setToken(null);
    setUser(null);
  };

  const hasRole: AuthState["hasRole"] = (...roles) =>
    !!user && roles.includes(user.role);

  const value = useMemo(
    () => ({ user, token, loading, login, register, logout, hasRole }),
    [user, token, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};
