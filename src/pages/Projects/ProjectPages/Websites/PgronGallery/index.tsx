import React from "react";
import * as S from "pages/Projects/project-styles";
import { MidWrapper } from "globalStyles/wrappers";
import ProjectTitle from "components/Project/ProjectTitle";
import HeaderImage from "assets/images/PgronGallery/PgronGalleryHeader.png";
import MainImage from "assets/images/PgronGallery/PgronGalleryMain.jpg";
import TechList from "components/TechList";
import { pgronGalleryTech } from "utils/techLists";
import ProjectLinks from "components/Project/ProjectLinks";


const ProjectPage = () => {
  return (
    <MidWrapper>
      <S.ProjectWrapper>
        <S.ProjectBody>
          <S.ProjectImage src={HeaderImage} />
          <div>
            <ProjectTitle text={`Peter Grondahl Gallery`} />
            <h3>Sole Developer</h3>
            <S.ProjectHeaderText>{`Tube is an FPS Horror game where your goal is to get to the end of the generated level, fighting through enemies, and eating donuts along the way.`}</S.ProjectHeaderText>
            <ProjectLinks github={""} website={"https://www.pgron.com/"} />

            <TechList>{pgronGalleryTech}</TechList>
            <S.ProjectText>
              <span>{`I was asked to create a gallery page for the artist Peter Gröndahl.
              I wanted to use REACT to create a Single page application.`}</span>

              <span>{`I did not want the design to be overly ambitious since this would be an art page, I did not want the design to seep into and affect the art itself.
              thus I chose an minimalistic but exclusive design.
              Since I wanted to create a SPA REACT felt like the obvious choice with its virtual DOM, also since REACT uses a compnent based design stucture,
	            I felt like I could easily wrap my head arount it coming from Unity (witch also uses component based design).`}</span>

              <span>{`I made sure to cache all data when the user enters the website to prevent waiting for multiple fetch calls evey time the user changes Route.
              While I still wanted a minimalistic design with animated transitions,
              I didn't want the user to feel intimidated by complex UI/UX and tried to keep the UX as familiar as possible. This also makes it easy to adapt to all different kinds of screen resolutions.`}</span>
            </S.ProjectText>
          </div>
          <S.ProjectText>{`Creating the mobile version I didn't want it too feel like the mobile version is just the widescreen website crammed into a smaller display,
	            so I wanted to create big easy buttons to navigate with, and a more custom tailored re-design to fit the mobile UX.`}</S.ProjectText>
          <S.ProjectImage src={MainImage} />
        </S.ProjectBody>
      </S.ProjectWrapper>
    </MidWrapper>
  );
};

export default ProjectPage;
