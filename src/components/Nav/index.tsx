import React from "react";
import { NavWrapper, NavLink } from "./style";

const Nav = () => {
  return (
    <NavWrapper>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/projects/websites"}>Projects</NavLink>
      <NavLink to={"/resume"}>Resume</NavLink>
    </NavWrapper>
  );
};

export default Nav;
