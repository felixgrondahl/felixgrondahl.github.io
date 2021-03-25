import React from "react";
import { Wrapper } from "./style";
import { StyledNavLink } from "globalStyles/link-styles";

const ProjectsNav = ({ show }: { show: boolean }) => {
  return (
    <Wrapper display={show}>
      <StyledNavLink to={"/projects/websites"}>Websites</StyledNavLink>
      <StyledNavLink to={"/projects/games"}>Games</StyledNavLink>
      <StyledNavLink to={"/projects/misc"}>Misc</StyledNavLink>
    </Wrapper>
  );
};

export default ProjectsNav;
