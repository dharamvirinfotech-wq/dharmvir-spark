import { useEffect, ReactNode } from "react";
import {
  fetchMeThunk,
  loginThunk,
  registerThunk,
  logout as logoutAction,
} from "@/store/authSlice";
import { useAppDispatch, useAppSelector } from "@/store";
import { authApi, tokenStore } from "@/lib/api";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (tokenStore.get()) {
      dispatch(fetchMeThunk());
    }
  }, [dispatch]);
  return <>{children}</>;
};

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, token, loading, error } = useAppSelector((s) => s.auth);

  const login = async (email: string, password: string) => {
    const result = await dispatch(loginThunk({ email, password }));
    if (loginThunk.rejected.match(result)) {
      throw new Error(result.payload ?? "Login failed");
    }
    return result.payload;
  };

  const register = async (payload: Parameters<typeof authApi.register>[0]) => {
    const result = await dispatch(registerThunk(payload));
    if (registerThunk.rejected.match(result)) {
      throw new Error(result.payload ?? "Registration failed");
    }
    return result.payload;
  };

  const logout = () => dispatch(logoutAction());

  const hasRole = (...roles: string[]) => !!user && roles.includes(user.role);

  return { user, token, loading, error, login, register, logout, hasRole };
};
