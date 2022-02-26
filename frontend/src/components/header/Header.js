import React from "react";
import { Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import SearchBox from "../searchBox/SearchBox";
// import { logout } from "../actions/userActions";
import "./Header.css";

const Header = () => {
  // const dispatch = useDispatch();

  // const userLo1gin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  // const logoutHandler = () => {
  //   dispatch(logout());
  // };

  const userInfo = { name: "Nguyen Van A" };

  return (
    <>
      {/* <header> */}
      <Navbar
        className="navbar-custom-bg"
        // bg="light"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://bootstrapious.com/i/snippets/sn-nav-logo/logo.png"
              width="45"
              alt=""
              class="d-inline-block align-middle mr-2"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-custom-font-color" href="#home">
                MEN
              </Nav.Link>
              <Nav.Link className="nav-custom-font-color" href="#link">
                WOMEN
              </Nav.Link>
              <Nav.Link className="nav-custom-font-color" href="#link">
                KIDS
              </Nav.Link>
              <Nav.Link className="nav-custom-font-color" href="#link">
                MUSIC
              </Nav.Link>
              <Nav.Link className="nav-custom-font-color" href="#link">
                SPORT
              </Nav.Link>
              <Nav.Link className="nav-custom-font-color" href="#link">
                RELEASES
              </Nav.Link>
              <Nav.Link className="nav-custom-font-color" href="#link">
                SALES
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <SearchBox />
        </Container>
      </Navbar>
      {/* </header> */}
    </>
  );
};

export default Header;
