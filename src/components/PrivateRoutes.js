import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const { user } = useSelector((state) => state.auth);
  // const auth = user?.token;

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
