import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import {
  aboutUrl,
  homeUrl,
  usersUrl,
  usersLoginUrl,
  usersRegisterUrl,
} from "../config/frontendUrl.config";

import { basename, hashEnabled, siteTitle } from "../config/other.config";
import { usersHandleLogout } from "../handlers/users.handler";

const Header = (props) => {
  let hashUrl = "";
  let homeUrlFinal = homeUrl,
    aboutUrlFinal = aboutUrl,
    usersUrlFinal = usersUrl;

  if (hashEnabled) {
    hashUrl = "#";
    homeUrlFinal = basename + hashUrl + homeUrl;
    aboutUrlFinal = basename + hashUrl + aboutUrl;
    usersUrlFinal = basename + hashUrl + usersUrl;
  }

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand href={homeUrlFinal}>
            {siteTitle || "linktree"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={homeUrlFinal}>Home</Nav.Link>
              <Nav.Link href={aboutUrlFinal}>About</Nav.Link>
            </Nav>

            {/* Login Checks */}
            <Nav>
              {props.auth.usersLogin ? (
                <>
                  {/* Logged In */}
                  {/* TODO add Profile page */}
                  <Nav.Link href={usersUrlFinal}>Profile</Nav.Link>
                  <Nav.Link
                    href={homeUrlFinal}
                    onClick={() => usersHandleLogout(props.setAuth)}
                  >
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  {/* Logged Out */}
                  {/* <h1>false</h1> */}
                  {/* Users Routes */}
                  {/* <NavDropdown title="Users Menu" id="basic-nav-dropdown"> */}
                  <Nav.Link href={usersUrlFinal + usersLoginUrl}>
                    Login
                  </Nav.Link>
                  <Nav.Link href={usersUrlFinal + usersRegisterUrl}>
                    Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
