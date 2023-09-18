import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const value = useContext(AuthContext);
  const auth = value?.auth;

  return (
    <div>
      <Link to="/">Home </Link>
      {auth && auth.username}
      {auth ? <Link to="#"> Logout</Link> : <Link to="/login">Login</Link>}

    </div>
  );
};

export default Header;
