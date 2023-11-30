import React, { useState } from "react";
import { NavbarBrand, Navbar, NavLink, NavbarText } from "reactstrap";
import './CSS/navbar.css'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    <div className="nbar">
      <Navbar className="navbar" href="#navbar">
        <NavbarBrand id="logo" className="text-light" href="/">JP</NavbarBrand>
        <NavbarBrand className="text-light" href="#experience">Experience</NavbarBrand>
        <NavbarBrand className="text-light" href="#contact">Contact</NavbarBrand>
        <NavbarBrand className="text-light" href="#about">About</NavbarBrand>
        <NavbarBrand className="text-light" href="#projects">Projects</NavbarBrand>
      </Navbar>
      </div>
    </>
  );
};

export default Nav;
