import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdPage from "./pages/AdPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/login" element={<PrivateRoute />}>
              <Route Component={LoginPage} path="/login" />
            </Route>
            <Route path="/signup" element={<PrivateRoute />}>
              <Route Component={SignUpPage} path="/signup" />
            </Route>
            <Route Component={AdPage} path="/" />
          </Routes>
        </AuthProvider>
      </Router>
    </NextUIProvider>
  );
}

export default App;
