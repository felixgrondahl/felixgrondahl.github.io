import styled from "styled-components";
import { device } from "globalStyles/breakpoints";

interface MobileNavProps {
  readonly show: boolean;
}

export const MobileProjectsNav = styled.nav<MobileNavProps>`
  display: none;

  @media ${device.tablet} {
    position: relative;
    display: ${(props) => (props.show ? "block" : "none")};
    text-align: center;
    padding-top: 50px;

    h2 {
      letter-spacing: 0.7em;
      font-weight: 400;
    }

    div {
      padding-top: 15px;
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-evenly;
    }

    z-index: 999;
  }
`;

export const MobileSideMenuNav = styled.div`
  display: none;
  position: absolute;
  width: 60vw;
  height: 100vh;

  @media ${device.tablet} {
    display: inline;

    z-index: 999;
  }
`;
