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

const Header = () => {
  const value = useContext(AuthContext);
  const auth = value?.auth;
  const logoutUser = value?.logoutUser;

  return (
    <Navbar position="sticky" isBordered >
      <NavbarBrand>
        <p className="font-bold text-inherit">Rentie</p>
      </NavbarBrand>
      <NavbarContent className=" sm:flex gap-4" justify="start">
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Home
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
            >
              Profile
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <NewAdButton />
        </NavbarItem>
        <NavbarItem className=" lg:flex">
          {auth?.getAuth ? (
            <Button onClick={() => logoutUser()}> Logout</Button>
          ) : (
            <Button as={Link} color="primary" href="/login" variant="flat">
              Login
            </Button>
          )}
        </NavbarItem>
        <NavbarItem>
          {auth?.getAuth ? (
            ""
          ) : (
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
