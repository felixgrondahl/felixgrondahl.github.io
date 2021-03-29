import React from "react";
import MeImage from "assets/images/headshotsmall.png";
import { ProfileImg, TextWrapper, MobileHeader, AboutWrapper } from "./style";

const AboutMe = () => {
  return (
    <>
      <MobileHeader>ABOUT ME</MobileHeader>
      <AboutWrapper>
        <ProfileImg style={{ backgroundImage: `url(${MeImage})` }} />
        <TextWrapper>
          <h1>FELIX GRÖNDAHL</h1>
          <p>
            <span>{`Passionate self-taught programmer and gamer that just can’t get enough of creating games, apps, and learning new things.`}</span>
            <span>{`Whether it’s a website, 2D platformer, full 3D experience, a mobile app or procedural animation utilizing
              machine learning, I’m always up for the challenge.`}</span>
          </p>
        </TextWrapper>
      </AboutWrapper>
    </>
  );
};

export default AboutMe;
