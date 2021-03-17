import React from "react";
import { NavWrapper, NavLink, ProjectNav } from "./style";
import { MobileProjectsNav } from "./mobileStyle";
import { useSpring } from "react-spring";
import SidePanel from "./SidePanel";
// import { ReactComponent as MobileMenu } from "assets/icons/mobile-menu.svg";

const Nav = ({ projects }: { projects: boolean }) => {
  const showProjectsSpring = useSpring({ width: projects ? "300px" : "0px" });
  return (
    <>
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

      <SidePanel />

      <MobileProjectsNav show={projects}>
        <h2>PROJECTS</h2>
        <div>
          <NavLink to={"/projects/websites"}>Websites</NavLink>
          <NavLink to={"/projects/games"}>Games</NavLink>
          <NavLink to={"/projects/misc"}>Misc</NavLink>
        </div>
      </MobileProjectsNav>
    </>
  );
};

export default Nav;
