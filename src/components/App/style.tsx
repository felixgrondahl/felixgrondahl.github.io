import styled from "styled-components";
import { animated } from "react-spring";
import { device } from "globalStyles/breakpoints";

export const AnimatedRoutes = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100vh;
  will-change: opacity;
  overflow: hidden;
  pointer-events: none;

  @media ${device.tablet} {
    overflow-y: visible;
  }
`;
