import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
    <>
      <Button onPress={onOpen} color="primary" variant="flat">
        Sign Up
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  value={email}
                  type="email"
                  variant="bordered"
                />
                <Input
                  label="Username"
                  placeholder="Enter your username"
                  onChange={(e) => setUsername(e.currentTarget.value)}
                  value={username}
                  type="text"
                  variant="bordered"
                />
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  value={password}
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
                <Button
                  color="primary"
                  onClick={handleSignup}
                  onPress={onClose}
                >
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignUpPage;
