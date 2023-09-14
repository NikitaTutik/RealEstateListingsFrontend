import { createContext, useState } from "react";
import { ChildrenProps, IAuthContext } from "../types";

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: ChildrenProps) => {
  const [auth, setAuth] = useState({
    userId: "",
    username: "",
    token: "",
    getAuth: false,
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
