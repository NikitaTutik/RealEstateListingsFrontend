import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as LinkUI,
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
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Rentie</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
            >
              Autoscaling
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive>
          <LinkUI href="#" aria-current="page">
            GGG
          </LinkUI>
        </NavbarItem>
        <NavbarItem>
          <LinkUI color="foreground" href="#">
            Integrations
          </LinkUI>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className=" lg:flex">{auth && auth.username}</NavbarItem>
        <NavbarItem className=" lg:flex">
          <LinkUI href="#">Login</LinkUI>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <LinkUI href="/">Home </LinkUI>
      {auth?.getAuth ? (
        <p onClick={() => logoutUser()}> Logout</p>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </Navbar>
  );
};

export default Header;
