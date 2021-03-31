import React from "react";
import MeImage from "assets/images/headshotsmall.png";
import { ProfileImg, TextWrapper, MobileHeader, AboutWrapper } from "./style";
import { Helmet } from "react-helmet";

const AboutMe = () => {
  return (
    <>
      <MobileHeader>ABOUT ME</MobileHeader>
      <AboutWrapper>
        <Helmet>
          <title>Felix Gröndahl | About Me</title>
          <meta
            name="description"
            content="Felix Gröndahl a passionate self-taught programmer and gamer that just can’t get enough of creating games, apps, and learning new things."
          />
          <link rel="canonical" href="https://felixgrondahl.github.io/about" />
          <meta property="og:url" content="https://felixgrondahl.github.io/about" />
          <meta property="og:title" content="Felix Gröndahl Portfolio | About Me" />
          <meta property="og:description" content="Felix Gröndahl - About Me." />
        </Helmet>

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
