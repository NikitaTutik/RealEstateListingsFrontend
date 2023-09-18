import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const value = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    const res = await axios({
      method: "post",
      url: "https://real-estate-listingsapi.onrender.com/api/token/",
      data: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const decodedToken: any = jwt_decode(res.data.access);

    if (res.status === 200) {
      value?.setAuth({
        userId: res.data.user_id,
        username: decodedToken.username,
        token: res.data.access,
        getAuth: true,
      });
      localStorage.setItem("authTokens", JSON.stringify(res.data));
      navigate("/");
    } else {
      alert("Wrong credentials " + res.status);
    }
  }

  return (
    <div>
      <form>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.currentTarget.value)}
          value={email}
          placeholder="Enter email"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.currentTarget.value)}
          value={password}
          placeholder="Enter password"
        />
        <input type="submit" onClick={handleLogin} />
      </form>
    </div>
  );
};

export default LoginPage;
