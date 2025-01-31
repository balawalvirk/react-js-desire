import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import AuthLayout from "../../layouts/AuthLayout";
import { routes } from "../../routes";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth/account");
    }
    if (!isLoggedIn && location.pathname === "/") {
      navigate("/auth/account");
    }
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <AdminLayout routes={routes?.adminRoutes} />
      ) : (
        <AuthLayout routes={routes.authRoutes} />
      )}
    </>
  );
};

export default AppRoutes;
