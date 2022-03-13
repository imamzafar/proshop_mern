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
                <div id="a" style={{ paddingBottom: "18px" }}>
                  SLIDES
                </div>
                <div id="b" class="arrow-down"></div>
              </Nav.Link>
              <Nav.Link className="nav-custom-font-color" href="#link">
                <div id="a" style={{ paddingBottom: "18px" }}>
                  SNEAKERS
                </div>
                <div id="b" class="arrow-down"></div>
              </Nav.Link>
              <Nav.Link className="nav-custom-font-color" href="#link">
                <div id="a" style={{ paddingBottom: "18px" }}>
                  BOOTS
                </div>
                <div id="b" class="arrow-down"></div>
              </Nav.Link>

              <Nav.Link className="nav-custom-font-color" href="#link">
                <div id="a" style={{ paddingBottom: "18px" }}>
                  CROCS
                </div>
                <div id="b" class="arrow-down"></div>
              </Nav.Link>

              <Nav.Link className="nav-custom-font-color" href="#link">
                <div id="a" style={{ paddingBottom: "18px" }}>
                  SLIPPERS
                </div>
                <div id="b" class="arrow-down"></div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <SearchBox />
        </Container>
        <i style={{color:'white',fontSize:'1.6rem', marginRight:'1rem'}} class="fa-solid fa-user"></i>
        <i style={{color:'white',fontSize:'1.6rem',  marginRight:'2rem'}}  class="fa-solid fa-bag-shopping"></i>
      </Navbar>

      {/* </header> */}
    </>
  );
};

export default Header;
