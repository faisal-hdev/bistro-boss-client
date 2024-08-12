import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import UseAdmin from "../hooks/UseAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const [isAdmin, isAdminLoading] = UseAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <span className="loading loading-ball loading-lg"></span>;
  }
  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ form: location }} replace></Navigate>;
};

export default AdminRoute;
