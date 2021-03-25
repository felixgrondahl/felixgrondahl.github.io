import styled from "styled-components";
// import { StyledLink } from "globalStyles/link-styles";
import { animated } from "react-spring";
import { device } from "globalStyles/breakpoints";

export const NavWrapper = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 750px;
  margin: auto;
  padding-top: 40px;
  z-index: 999;
  font-size: 1.6rem;

  @media ${device.tablet} {
    display: none;
  }
`;

export const ProjectWrapper = styled.div``;

export const ProjectNav = styled(animated.div)`
  font-size: 1.2rem;
  margin-left: 30px;
  overflow: hidden;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
`;
