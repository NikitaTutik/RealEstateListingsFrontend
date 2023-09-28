import { createContext, useEffect, useState } from "react";
import { ChildrenProps, IAuthContext } from "../types";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: ChildrenProps) => {
  let [loading, setLoading] = useState(true);

  const user: any = localStorage.getItem("authTokens")
    ? jwt_decode(JSON.parse(localStorage.getItem("authTokens")!).access)
    : null;

  const [auth, setAuth] = useState(() =>
    user
      ? {
          userId: user.user_id,
          username: user.username,
          token: JSON.parse(localStorage.getItem("authTokens")!).access,
          getAuth: true,
        }
      : {
          userId: "",
          username: "",
          token: "",
          getAuth: false,
        }
  );

  let logoutUser = () => {
    setAuth({ userId: "", username: "", token: "", getAuth: false });
    localStorage.removeItem("authTokens");
  };

  let updateToken = async () => {

    const response = await axios.post(
      "https://real-estate-listingsapi.onrender.com/api/token/refresh/",
      { refresh: JSON.parse(localStorage.getItem("authTokens")!)?.refresh },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const decodedToken: any = jwt_decode(response.data.access);

    if (response.status === 200) {
      setAuth({
        userId: response.data.user_id,
        username: decodedToken.username,
        token: response.data.access,
        getAuth: true,
      });
      localStorage.setItem("authTokens", JSON.stringify(response.data));
    } else {
      logoutUser();
    }

    if (loading) {
      setLoading(false);
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (auth.token) {
        updateToken();
      }
    }, 1000 * 60 * 4);
    return () => clearInterval(interval);
  }, [auth, loading]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
