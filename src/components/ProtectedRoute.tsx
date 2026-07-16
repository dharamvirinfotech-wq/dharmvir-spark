import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Loader2 } from "lucide-react";

type Props = {
  children: ReactNode;
  roles?: string[]; // if provided, user must have one of these roles
};

const ProtectedRoute = ({ children, roles }: Props) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="animate-spin text-accent" size={32} />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  if (roles && roles.length && !roles.includes(user.role)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="max-w-md text-center bg-card border border-border rounded-2xl p-8 shadow-lg">
          <h1 className="text-2xl font-bold text-primary mb-2">Access Denied</h1>
          <p className="text-muted-foreground text-sm mb-4">
            Your account ({user.role}) does not have permission to view this area.
            Required role: {roles.join(", ")}.
          </p>
          <a
            href="/"
            className="inline-block bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent/90"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
