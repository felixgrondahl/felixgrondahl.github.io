import styled from "styled-components";
import { StyledLink } from "globalStyles/link-styles";
import { device } from "globalStyles/breakpoints";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  @media ${device.tablet} {
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
  top: calc(50% - 56px / 2 - 75px);
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${device.tablet} {
    top: initial;
    left: initial;
    transform: none;
  }

  span#subtitle {
    display: block;
  }

  span {
    letter-spacing: 0.12em;
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
  /* top: 20%; */
  height: 200px;

  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`;

export const MobileLink = styled(StyledLink)`
  font-size: 1.3em;
  letter-spacing: 0.4em;
  font-weight: 400;
  border-radius: 5px;
  padding: 10px 0px;
  width: 90%;
  text-align: center;
  /* background-color: rgba(0, 0, 0, 0.15); */
`;
