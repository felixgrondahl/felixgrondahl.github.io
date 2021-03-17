import styled from "styled-components";
import { device } from "globalStyles/breakpoints";

export const MobileHeader = styled.h2`
  display: none;
  position: absolute;
  letter-spacing: 0.7em;
  font-weight: 400;
  width: 100%;
  text-align: center;
  padding-top: 70px;

  @media ${device.tablet} {
    display: initial;
  }
`;

export const ProfileImg = styled.div`
  width: 250px;
  height: 250px;
  background-size: cover;
  border-radius: 10px;
  margin: auto;

  @media ${device.tablet} {
    width: 130px;
    height: 130px;
  }
`;

export const TextWrapper = styled.div`
  width: 50%;
  margin: auto;

  @media ${device.tablet} {
    width: 90%;
  }
  h1 {
    font-size: 2.2rem;
    letter-spacing: 0.4em;
    text-align: center;

    @media ${device.tablet} {
    font-size: 1.3rem;
    font-weight: 400;
  }
  }

  p {
    span {
      display: block;
      margin-bottom: 20px;
    }
  }
`;
