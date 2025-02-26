import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import AuthLayout from "../../layouts/AuthLayout";
import { routes } from "../../routes";

const AppRoutes = () => {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user?._id) {
      navigate("/auth/account");
    }
    if (!user?._id && location.pathname === "/") {
      navigate("/auth/account");
    }
  }, [user]);

  return (
    <>
      {user?._id ? (
        <AdminLayout routes={routes?.adminRoutes} />
      ) : (
        <AuthLayout routes={routes.authRoutes} />
      )}
    </>
  );
};

export default AppRoutes;
