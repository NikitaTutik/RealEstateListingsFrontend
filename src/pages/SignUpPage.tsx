import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSignup(event: React.FormEvent) {
    event.preventDefault();

    const res = await axios({
      method: "post",
      url: "https://real-estate-listingsapi.onrender.com/api/users/",
      data: JSON.stringify({ email, username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.status === 201) {
      navigate("/");
    } else {
      alert("Something went wrong " + res.status);
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
            type="username"
            name="username"
            onChange={(e) => setUsername(e.currentTarget.value)}
            value={username}
            placeholder="Enter username"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
            placeholder="Enter password"
          />
          <input type="submit" onClick={handleSignup} />
        </form>
      </div>
  );
};

export default SignUpPage;
