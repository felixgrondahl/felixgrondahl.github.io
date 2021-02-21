import styled from "styled-components";
import { animated } from "react-spring";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: #1d1741;
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