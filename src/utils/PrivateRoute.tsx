import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const PrivateRoute = () => {
  const value = useContext(AuthContext);
  const auth = value?.auth;

  return auth?.getAuth ? <Navigate to="/"/> : <Outlet /> ;
};

export default PrivateRoute;
