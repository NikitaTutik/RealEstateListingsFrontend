import { createContext, useState } from "react";
import { ChildrenProps, IAuthContext } from "../types";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: ChildrenProps) => {
  const user: any = localStorage.getItem("authTokens")
    ? jwt_decode(JSON.parse(localStorage.getItem("authTokens")!).access)
    : null;
  const [auth, setAuth] = useState(
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
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
