import React from "react";
import { Wrapper, Circle, BackgroundSvg } from "./style";
import { useSpring, config, animated } from "react-spring";

const Background = ({ scale, color }: { scale: number; color: string }) => {
  const smallGrowSpring = useSpring({ transform: `scale(${scale})`, config: { mass: 2, tension: 300 } });
  const largeGrowSpring = useSpring({ transform: `scale(${scale})`, config: { mass: 2, tension: 200 } });
  const colorSpring = useSpring({color: color});

  let grow = scale > 1;
  const opacityOutSpring = useSpring({
    opacity: grow ? 0 : 1,
    config: { tension: grow ? 500 : 10, mass: grow ? 1 : 2 },
  });

  return (
    <Wrapper>
      <BackgroundSvg width="1627" height="1080" viewBox="0 0 1627 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Circle
          cx="813.5"
          cy="534.5"
          r="813.5"
          fill="url(#paint0_linear)"
          style={{ ...largeGrowSpring, mixBlendMode: "multiply" }}
        />
        <Circle
          id="centerCircle1"
          cx="813.5"
          cy="539.5"
          r="368.5"
          fill="url(#paint1_radial)"
          style={{ ...opacityOutSpring, mixBlendMode: "exclusion" }}
        />
        <Circle
          id="centerCircle2"
          cx="813.5"
          cy="539.5"
          r="368.5"
          stroke="url(#paint2_linear)"
          strokeWidth="6"
          style={{ ...opacityOutSpring, mixBlendMode: "saturation" }}
        />
        <Circle style={smallGrowSpring} id="centerCircle3" cx="813.5" cy="528.5" r="371.5" fill="url(#paint3_radial)" />
        <defs>
          <linearGradient id="paint0_linear" x1="813.5" y1="-279" x2="813.5" y2="1348" gradientUnits="userSpaceOnUse">
            <stop stopColor="#52AEC2" stopOpacity="0.65" />
            <stop offset="0.697917" stopColor="#0C191C" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint1_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(814 168) rotate(90) scale(654)"
          >
            <stop stopColor="#2FC4F3" />
            <stop offset="0.947917" stopColor="#790B25" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="paint2_linear" x1="813.5" y1="168" x2="813.5" y2="911" gradientUnits="userSpaceOnUse">
            <stop stopColor="#52AEC2" stopOpacity="0.79" />
            <stop offset="0.692708" stopColor="#0C191C" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint3_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(814 157) rotate(90) scale(654)"
          >
            <animated.stop stopColor={colorSpring.color} />
            <stop offset="1" stopColor="#790B25" stopOpacity="0" />
          </radialGradient>
        </defs>
      </BackgroundSvg>
    </Wrapper>
  );
};

export default Background;
