import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const value = useContext(AuthContext);
  const navigate = useNavigate();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


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
    <>
      <Button onPress={onOpen}color="primary" variant="flat">Login</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  value={email}
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  value={password}
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={handleLogin} onPress={onClose}>
                  Login
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginPage;
