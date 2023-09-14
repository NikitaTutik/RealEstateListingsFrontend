import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdPage from "./pages/AdPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const value = useContext(AuthContext);
  const auth = value?.auth;

  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<PrivateRoute/>}>
            <Route Component={AdPage} path="/"/>
          </Route>
            <Route Component={LoginPage} path="/login" />

        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
