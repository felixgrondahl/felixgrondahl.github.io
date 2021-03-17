import styled from "styled-components";
import { animated } from "react-spring";
import { device } from "globalStyles/breakpoints";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: #1d1741;

  @media ${device.tablet} {
    width: 240%;
    height: 240%;
    top: 200px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const BackgroundSvg = styled.svg`
  display: block;
  margin: auto;
  height: 100%;
  width: 100%;
`;

export const Circle = styled(animated.circle)`
  transform-origin: center;
  transform-box: fill-box;
`;
