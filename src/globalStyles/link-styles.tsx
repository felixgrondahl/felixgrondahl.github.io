import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  font-size: inherit;
  font-weight: 300;
  width: 150px;
  text-align: center;

  color: white;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: white;
    text-decoration: none;
  }

  &:hover {
    color: #dddddd;
  }

  &.active {
    font-weight: 500;
  }
`;
