import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Private_Route = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo && userInfo.data.type === "teacher" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Private_Route;
