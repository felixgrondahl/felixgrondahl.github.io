import React from "react";
import MeImage from "assets/images/Felix_square.jpg";
import {
  ProfileImg,
  TextWrapper,
  MobileHeader,
  AboutWrapper,
  LeftColumn,
  RightColumn,
  Projects,
  Skills,
  Concepts,
  Header,
  ContentWrapper,
  TextList,
  ListTitle,
  HeaderTitle
} from "./style";
import TechList from "components/TechList";
import { AllTech } from "utils/techLists";
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

        <ContentWrapper>
          <Header>
            <ProfileImg style={{ backgroundImage: `url(${MeImage})` }} />
            <HeaderTitle>
              <h1>FELIX GRÖNDAHL</h1>
              <TechList icons={AllTech} websites={null} fitContent={true} />
            </HeaderTitle>
          </Header>

          <TextWrapper>
            <LeftColumn>
              <div>
                <p>
                  <span>{`Passionate self-taught Frontend web developer that just can’t get enough of learning and improving.`}</span>
                  <span>{`Whether it’s a website, 2D platformer, full 3D experience, a mobile app or procedural animation utilizing
              machine learning, I’m always up for the challenge.`}</span>
                </p>
              </div>
              <Projects>
                <ListTitle>PROJECTS</ListTitle>
                <TextList>
                  <li>
                    <p>{`2021
                      PGRON SHOP | WEB
                      HTML SASS TS React NextJS`}</p>
                  </li>
                  <li>
                    <p>{`2020
                      Peter Grondahl Gallery | WEB
                      HTML CSS JS React`}</p>
                  </li>
                  <li>
                    <p>{`2019
                      Tube | PC
                      C# Unity`}</p>
                  </li>
                  <li>
                    <p>{`2015
                      JETMAN | Android / IOS
                      C# Unity`}</p>
                  </li>
                </TextList>
              </Projects>
            </LeftColumn>

            <RightColumn>
              <Skills>
                <div>
                  <ListTitle>LANGUAGES</ListTitle>
                  <TextList>
                    <li>
                      <p>HTML - 4/5</p>
                    </li>
                    <li>
                      <p>CSS - 4/5</p>
                    </li>
                    <li>
                      <p>JS - 4/5</p>
                    </li>
                    <li>
                      <p>TS - 4/5</p>
                    </li>

                    <li>
                      <p>C# - 4/5</p>
                    </li>
                    <li>
                      <p>Python - 3/5</p>
                    </li>
                    <li>
                      <p>C - 2/5</p>
                    </li>
                    <li>
                      <p>C++ - 2/5</p>
                    </li>
                  </TextList>
                </div>

                <div>
                  <ListTitle>FRAMEWORKS</ListTitle>
                  <TextList>
                    <li>
                      <p>React - 4/5</p>
                    </li>
                    <li>
                      <p>PixiJS - 3/5</p>
                    </li>
                    <li>
                      <p>NextJS - 3/5</p>
                    </li>
                  </TextList>
                </div>
              </Skills>

              <Concepts>
                <ListTitle>CONCEPTS</ListTitle>
                <TextList>
                  <li>
                    <p>Clear understanding of OOP</p>
                  </li>
                  <li>
                    <p>
                      Clear understanding of design patterns such as Dependency Injection Pattern, Component Pattern,
                      MVC Pattern, and Factory Pattern.
                    </p>
                  </li>
                  <li>
                    <p>Intermediate knowledge in Math and Physics</p>
                  </li>
                </TextList>
              </Concepts>
            </RightColumn>
          </TextWrapper>
        </ContentWrapper>
      </AboutWrapper>
    </>
  );
};

export default AboutMe;
