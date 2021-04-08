import React from "react";
import MeImage from "assets/images/Felix_square.jpg";
import * as S from "./style";
import TechList from "components/TechList";
import { AllTech } from "utils/techLists";
import { Helmet } from "react-helmet";
import { ProjectTemplate } from "components/ProjectTemplate";

const AboutMe = () => {
  return (
    <>
      <S.MobileHeader>ABOUT ME</S.MobileHeader>
      <S.AboutWrapper>
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

        <S.ContentWrapper>
          <S.Header>
            <S.ProfileImg style={{ backgroundImage: `url(${MeImage})` }} />
            <S.HeaderTitle>
              <h1>FELIX GRÖNDAHL</h1>
              <TechList icons={AllTech} websites={null} fitContent={true} />
            </S.HeaderTitle>
          </S.Header>

          <S.TextWrapper>
            <S.LeftColumn>
              <S.SectionWrapper>
                <S.ListTitle>ABOUT ME</S.ListTitle>
                <p>
                  <span className="textBlock">{`Passionate Front-end developer that just can’t get enough of learning and improving.`}</span>
                  <span className="textBlock">{`With 5 years experience in game development and 1 year in Front-end web development I feel that I have a very wide grasp of 
                  "Front-end" that many others might not have.`}</span>
                  <span className="textBlock">{`Whether it’s a website, casino game, full 3D experience, a mobile app or procedural animation utilizing
              machine learning, I’m always up for the challenge.`}</span>
                </p>
              </S.SectionWrapper>
              <S.Projects>
                <S.SectionWrapper>
                  <S.ListTitle>PROJECTS</S.ListTitle>
                  <S.TextList>
                    <li>
                      <ProjectTemplate
                        year="2021"
                        projTitle="Peter Grondahl Gallery | WEB"
                        role="Sole Developer"
                        tech="HTML CSS JS React"
                      />
                    </li>
                    <li>
                      <ProjectTemplate
                        year="2021"
                        projTitle="PGRON SHOP | WEB"
                        role="Sole Developer"
                        tech="HTML SASS TS React NextJS"
                      />
                    </li>
                    <li>
                      <ProjectTemplate
                        year="2019"
                        projTitle="Larn Wick | Bored Pixel Jam 5 | PC"
                        role="Programmer"
                        tech="C# Unity"
                      />
                    </li>
                    <li>
                      <ProjectTemplate
                        year="2019"
                        projTitle="Tube | PC"
                        role="Programmer | Animation | Tech Animator"
                        tech="C# Unity"
                      />
                    </li>
                    <li>
                      <ProjectTemplate
                        year="2015"
                        projTitle="JETMAN | Android / IOS"
                        role="Programmer"
                        tech="C# Unity"
                      />
                    </li>
                  </S.TextList>
                </S.SectionWrapper>
              </S.Projects>
            </S.LeftColumn>

            <S.RightColumn>
              <S.SectionWrapper>
                <S.Skills>
                  <div>
                    <S.ListTitle>LANGUAGES</S.ListTitle>
                    <S.TextList>
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
                    </S.TextList>
                  </div>

                  <div>
                    <S.ListTitle>FRAMEWORKS</S.ListTitle>
                    <S.TextList>
                      <li>
                        <p>React - 4/5</p>
                      </li>
                      <li>
                        <p>PixiJS - 3/5</p>
                      </li>
                      <li>
                        <p>NextJS - 3/5</p>
                      </li>
                    </S.TextList>
                  </div>
                </S.Skills>
              </S.SectionWrapper>
              <S.SectionWrapper>
                <S.Concepts>
                  <S.ListTitle>CONCEPTS</S.ListTitle>
                  <S.TextList>
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
                  </S.TextList>
                </S.Concepts>
              </S.SectionWrapper>
            </S.RightColumn>
          </S.TextWrapper>
        </S.ContentWrapper>
      </S.AboutWrapper>
    </>
  );
};

export default AboutMe;
