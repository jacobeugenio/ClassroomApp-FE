import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Student_Private_Route = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  return userInfo && userInfo.data.type === "student" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Student_Private_Route;
