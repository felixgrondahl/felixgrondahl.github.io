import styled from "styled-components";
import { animated } from "react-spring";

export const AnimatedRoutes = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  will-change: opacity;
  overflow: hidden;
`;
