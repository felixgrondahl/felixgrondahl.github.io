import styled from "styled-components";
import { device } from "globalStyles/breakpoints";
import { StyledNavLink } from "globalStyles/link-styles";

export const Wrapper = styled.div`
  position: absolute;
  pointer-events: auto;
  top: 39%;
  left: 50%;

  @media ${device.tablet} {
    width: 100%;
    position: initial;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    padding-top: 15vh;
    gap: 40px;
  }
`;

export const Title = styled.h1`
  position: relative;
  text-align: center;
  transform: translate(-50%, -50%);
  letter-spacing: 0.25em;

  @media ${device.tablet} {
    top: initial;
    left: initial;
    transform: none;
  }

  @media ${device.mobileS} {
    letter-spacing: 0.12em;
  }

  span#subtitle {
    display: block;
  }

  span {
    letter-spacing: 0.25em;
    font-size: 1rem;
    font-weight: 300;

    @media ${device.tablet} {
      letter-spacing: 0.2em;
      display: block;
    }
  }
`;

export const MobileLinkWrapper = styled.div`
  position: relative;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 200px;

  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`;

export const MobileLink = styled(StyledNavLink)`
  font-size: 1.3em;
  letter-spacing: 0.4em;
  font-weight: 400;
  border-radius: 5px;
  padding: 10px 0px;
  width: 90%;
  text-align: center;
`;
