import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/Auth";

const RequireAuth = ({ allowedRoles, children }: RequireAuthProps) => {
  const { user } = useAuth();
  const location = useLocation();

  return user?.roles?.find((role) => allowedRoles.includes(role)) ? (
    children
  ) : user ? (
    <Navigate to="/unauthorized" state={{ path: location.pathname }} replace />
  ) : (
    <Navigate to="/login" state={{ path: location.pathname }} replace />
  );
};

type RequireAuthProps = {
  allowedRoles: string[];
  children: React.ReactNode;
};

export default RequireAuth;
