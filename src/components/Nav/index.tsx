import React from "react";
import { NavWrapper, ProjectNav } from "./style";
import { MobileProjectsNav } from "./mobileStyle";
import { useSpring } from "react-spring";
import SidePanel from "./SidePanel";
import { StyledNavLink } from "globalStyles/link-styles";
import { matchPath } from "react-router";
import { useLocation } from "react-router-dom";
// import { ReactComponent as MobileMenu } from "assets/icons/mobile-menu.svg";

const Nav = ({ projects }: { projects: boolean }) => {
  const location = useLocation();
  // console.log(location.pathname);
  const showProjectsSpring = useSpring({ width: projects ? "300px" : "0px" });
  return (
    <>
      <NavWrapper>
        <StyledNavLink exact activeClassName="active" to={"/"}>Home</StyledNavLink>

        <div>
          <StyledNavLink isActive={() => matchPath(location.pathname, "/projects") ? true : false} to={"/projects/websites"}>Projects</StyledNavLink>
          <ProjectNav style={{...showProjectsSpring}}>
            <StyledNavLink to={"/projects/websites"}>Websites</StyledNavLink>
            <StyledNavLink to={"/projects/games"}>Games</StyledNavLink>
            <StyledNavLink to={"/projects/misc"}>Misc</StyledNavLink>
          </ProjectNav>
        </div>

        <StyledNavLink to={"/about"}>About Me</StyledNavLink>
      </NavWrapper>

      <SidePanel />

      <MobileProjectsNav show={projects}>
        <h2>PROJECTS</h2>
        <div>
          <StyledNavLink to={"/projects/websites"}>Websites</StyledNavLink>
          <StyledNavLink to={"/projects/games"}>Games</StyledNavLink>
          <StyledNavLink to={"/projects/misc"}>Misc</StyledNavLink>
        </div>
      </MobileProjectsNav>
    </>
  );
};

export default Nav;
