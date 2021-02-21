import React from "react";
import { Link } from "react-router-dom";
import { NavWrapper, NavLink } from "./style";

const Nav = () => {
  return (
    <NavWrapper>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/projects"}>Projects</NavLink>
      <NavLink to={"/resume"}>Resume</NavLink>
    </NavWrapper>
  );
};

export default Nav;
