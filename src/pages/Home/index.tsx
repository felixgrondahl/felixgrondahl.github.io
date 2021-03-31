import React from "react";
import { Wrapper, Title, MobileLinkWrapper, MobileLink } from "./style";

const Home = () => {
  return (
    <Wrapper>

      <Title>
        Felix Gröndahl
        <span id="subtitle">
          <span>Frontend Web Developer /</span>
          <span>Game Developer</span>
        </span>
      </Title>

      <MobileLinkWrapper>
        <MobileLink to={"/projects/websites"}>PROJECTS</MobileLink>
        <MobileLink to={"/about"}>ABOUT ME</MobileLink>
      </MobileLinkWrapper>
    </Wrapper>
  );
};

export default Home;
