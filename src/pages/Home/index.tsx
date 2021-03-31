import React from "react";
import { Helmet } from "react-helmet";
import { Wrapper, Title, MobileLinkWrapper, MobileLink } from "./style";
import OGImage from "assets/images/ogimage.jpg";

const Home = () => {
  return (
    <Wrapper>
      <Helmet>
      <meta name="description" content="Felix Gröndahl frontend web developer portfolio." />
        <link rel="canonical" href="https://felixgrondahl.github.io" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Felix Gröndahl Portfolio" />
        <meta property="og:url" content="https://felixgrondahl.github.io" />
        <meta property="og:title" content="Felix Gröndahl Portfolio" />
        <meta property="og:description" content="Felix Gröndahl - frontend web developer." />
        <meta property="og:image" content={OGImage} />
        <meta property="og:image:alt" content="Felix Gröndahl Portfolio og-image" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>

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
