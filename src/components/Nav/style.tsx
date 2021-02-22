import styled from "styled-components";
import { StyledLink } from "../../globalStyles/link-styles";

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
`;

export const NavLink = styled(StyledLink)`
  font-size: 1.6rem;
  font-weight: 300;
`;
