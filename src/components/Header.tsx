import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import NewAdButton from "./NewAdButton";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const value = useContext(AuthContext);
  const auth = value?.auth;
  const logoutUser = value?.logoutUser;
  const navigate = useNavigate();

  return (
    <Navbar position="sticky" isBordered>
      <NavbarBrand>
        <Link className="font-bold text-inherit" href="/" aria-current="page">
          <img src="icon.svg" width="50" />
        </Link>
      </NavbarBrand>
      <NavbarContent className=" sm:flex gap-4" justify="start">
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/categories" aria-current="page">
            Categories
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
              >
                {auth && auth.username}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          {auth?.getAuth ? (
            <DropdownMenu
              aria-label="Profile"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="View or edit your profile"
                onClick={() => navigate("/account")}
              >
                Profile
              </DropdownItem>
            </DropdownMenu>
          ) : (
            ""
          )}
        </Dropdown>
        <NavbarItem>{auth?.getAuth ? <NewAdButton /> : ""}</NavbarItem>
        <NavbarItem className=" lg:flex">
          {auth?.getAuth ? (
            <Button onClick={() => logoutUser()}>Logout</Button>
          ) : (
            <LoginPage />
          )}
        </NavbarItem>
        <NavbarItem>{auth?.getAuth ? "" : <SignUpPage />}</NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
