import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";
import './CSS/navbar.css';
import burger_menu from "./assets/burger-menu-svgrepo-com.svg"

const Navi = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nbar">
      <Navbar className="navbar" light expand="md">
        <NavbarBrand id="logo" className="text-light" href="/">JPruett</NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <img src={burger_menu} alt="burger menu icon" />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#experience">Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects">Projects</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;

