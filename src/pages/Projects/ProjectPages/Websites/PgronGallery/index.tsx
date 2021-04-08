import React, { useState } from "react";
import * as S from "pages/Projects/project-styles";
import { ProjectMidWrapper } from "globalStyles/wrappers";
import ProjectTitle from "components/Project/ProjectTitle";
import HeaderImage from "assets/images/PgronGallery/pgallery-main.jpg";
import MainImage from "assets/images/PgronGallery/pgallery-mob.jpg";
import TechList from "components/TechList";
import { pgronGalleryTech } from "utils/techLists";
import ProjectLinks from "components/Project/ProjectLinks";
import MediaModal from "components/ImageModal";
import { ModalProvider } from "styled-react-modal";
import { Helmet } from "react-helmet";

const ProjectPage = () => {
  const [showModal, setShowModal] = useState({ show: false, media: "" });

  const OpenMediaModal = (media: string) => {
    setShowModal({ show: true, media: media });
  };

  return (
    <>
      <ProjectMidWrapper>
        <Helmet>
          <title>Felix Gröndahl | Peter Grondahl Gallery</title>
          <meta
            name="description"
            content="Felix Gröndahl frontend web developer. A minimalistic art gallery page for Peter Gröndahl created with React."
          />
          <link rel="canonical" href="https://felixgrondahl.github.io/projects/websites/pgrongallery" />
          <meta property="og:url" content="https://felixgrondahl.github.io/projects/websites/pgronshop" />
          <meta property="og:title" content="Felix Gröndahl Portfolio | Projects | Peter Grondahl Gallery" />
          <meta property="og:description" content="Felix Gröndahl - Peter Grondahl Gallery website." />
        </Helmet>

        <S.ProjectWrapper>
          <S.ProjectBody>
            <S.ProjectImage onClick={() => OpenMediaModal(HeaderImage)} src={HeaderImage} />
            <div>
              <ProjectTitle text={`Peter Grondahl Gallery`} />
              <TechList
                fitContent={false}
                icons={pgronGalleryTech}
                websites={<ProjectLinks github={""} website={"https://www.pgron.com/"} />}
              />
              <h3>Sole Developer</h3>
              <S.ProjectHeaderText>{`A minimalistic art gallery page for Peter Gröndahl created with React.`}</S.ProjectHeaderText>

              <S.ProjectText>
                {/* <span>{`an exclusive gallery page for the artist Peter Gröndahl created in React.`}</span> */}

                <span>{`I knew I wanted to use React to create a Single Page Application (SPA) but I also had to make sure the design would not be too ambitious, I did not want the design to seep into and influence the art on the page.`}</span>

                <span>{`Since this would be a SPA where its core functionality is the image gallery, to prevent slow browsing, I made sure to cache all data when the user enters the website to prevent the user waiting through multiple fetch calls every time the user clicks an artwork.`}</span>
                <span>{`With the UI/UX I didn't want the user to feel intimidated by complex and abstract ideas, that alot of art gallery sites suffers from, and tried to keep the UX as familiar as possible. This also makes it easier for the site to be accessible for most devices.`}</span>
              </S.ProjectText>
            </div>
            <S.ProjectText>{`Building the mobile version I didn't want it too feel like the mobile version is just the widescreen website crammed into a smaller display,
	            so I wanted to create big easy buttons to navigate with, and a more custom tailored re-design to fit the mobile UX.`}</S.ProjectText>
            <S.ProjectImage onClick={() => OpenMediaModal(MainImage)} src={MainImage} />
          </S.ProjectBody>
        </S.ProjectWrapper>
      </ProjectMidWrapper>
      <ModalProvider>
        <MediaModal
          media={showModal.media}
          isOpen={showModal.show}
          hideModal={() => setShowModal({ show: false, media: "" })}
        />
      </ModalProvider>
    </>
  );
};

export default ProjectPage;
