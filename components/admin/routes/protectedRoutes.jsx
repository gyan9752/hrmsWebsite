import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

export const GuestOnly = ({ children }) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
  if (token) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export const RequireAuth = ({ children }) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export const RequireAdmin = ({ children }) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
  const userStr = typeof window !== "undefined" ? localStorage.getItem("user") : null;
  const user = userStr ? JSON.parse(userStr) : null;

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if ((user?.role || "admin").toLowerCase() === "author") {
    toast.error("Access Restricted: Author role can only manage blog posts.");
    return <Navigate to="/" replace />;
  }

  return children;
};
