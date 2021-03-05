import React from "react";
import { NavWrapper, NavLink, ProjectNav } from "./style";
import { useSpring } from "react-spring";

const Nav = ({ projects }: { projects: boolean }) => {
  const showProjectsSpring = useSpring({ width: projects ? "300px" : "0px" });
  return (
    <NavWrapper>
      <NavLink to={"/"}>Home</NavLink>

      <div>
        <NavLink to={"/projects/websites"}>Projects</NavLink>
        <ProjectNav style={showProjectsSpring}>
          <NavLink to={"/projects/websites"}>Websites</NavLink>
          <NavLink to={"/projects/games"}>Games</NavLink>
          <NavLink to={"/projects/misc"}>Misc</NavLink>
        </ProjectNav>
      </div>

      <NavLink to={"/about"}>About Me</NavLink>
    </NavWrapper>
  );
};

export default Nav;
