import {
  faArrowLeft,
  faCartFlatbed,
  faMobileAlt,
  faPersonFalling,
  faSearch,
  faSignInAlt,
  faSignOutAlt,
  faStore,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../Assets/Header-Logo.png";
import { useShoppingCar } from "../Context/ShopincartComp";
import "./NavBars.css";

const NavBars = () => {
  const { openCart, cartQuantity } = useShoppingCar();
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
    window.location.href = "/home";
  };
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="Eagle" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className="active">
              Home
            </Link>
            <Link to="/store" className="active">
              Store
            </Link>
            <Link to="/about" className="nav-link-m">
              About
            </Link>
            {authenticated ? (
              <React.Fragment>
                <Nav.Link onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </Nav.Link>
                <Link to="/userpanel">
                  <FontAwesomeIcon icon={faStore} />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faCartFlatbed} onClick={openCart} />{" "}
                  <div className="cart"> {cartQuantity} </div>
                </Link>
                <Link to="/profile">
                  <FontAwesomeIcon icon={faPersonFalling} />
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to="/login">
                  <FontAwesomeIcon icon={faSignInAlt} />
                </Link>
                <Link to="/registration">
                  <FontAwesomeIcon icon={faUserPlus} />
                </Link>
              </React.Fragment>
            )}
            <Nav.Link>
              <FontAwesomeIcon icon={faSearch} />
            </Nav.Link>
            <Nav.Link>
              <FontAwesomeIcon icon={faMobileAlt} />
            </Nav.Link>
            <Nav.Link>
              <button className="btnheader">
                Contact Us
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBars;
