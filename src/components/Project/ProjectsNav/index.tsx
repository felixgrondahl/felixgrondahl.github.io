import React from "react";
import { Wrapper } from "./style";
import { NavLink } from "components/Nav/style";

const ProjectsNav = ({ show }: { show: boolean }) => {
  return (
    <Wrapper display={show}>
      <NavLink to={"/projects/websites"}>Websites</NavLink>
      <NavLink to={"/projects/games"}>Games</NavLink>
      <NavLink to={"/projects/misc"}>Misc</NavLink>
    </Wrapper>
  );
};

export default ProjectsNav;
