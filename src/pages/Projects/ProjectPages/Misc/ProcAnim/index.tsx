import React, { useState } from "react";
import * as S from "pages/Projects/project-styles";
import { ProjectMidWrapper } from "globalStyles/wrappers";
import ProjectTitle from "components/Project/ProjectTitle";
import HeaderVideo from "assets/images/ProceduralAnimation/stiff.mp4";
import MainVideo from "assets/images/ProceduralAnimation/loose.mp4";
import TechList from "components/TechList";
import { ProceduralAnimTech } from "utils/techLists";
import MediaModal from "components/ImageModal";
import { ModalProvider } from "styled-react-modal";
import { Helmet } from "react-helmet";

const ProcAnim = () => {
  const [showModal, setShowModal] = useState({ show: false, media: "" });

  const OpenMediaModal = (media: string) => {
    setShowModal({ show: true, media: media });
  };

  return (
    <>
      <ProjectMidWrapper>
        <Helmet>
          <title>Felix Gröndahl | Procedural Animation</title>
          <meta
            name="description"
            content="Felix Gröndahl frontend web developer. Using Unity and machine learning to generate a self balancing walking biped."
          />
          <link rel="canonical" href="https://felixgrondahl.github.io/projects/misc/proceduralanimation" />
          <meta property="og:url" content="https://felixgrondahl.github.io/projects/misc/proceduralanimation" />
          <meta property="og:title" content="Felix Gröndahl Portfolio | Projects | Procedural Animation" />
          <meta property="og:description" content="Felix Gröndahl - Procedural Animation." />
        </Helmet>

        <S.ProjectWrapper>
          <S.ProjectBody>
            <S.ProjectVideo
              onClick={() => OpenMediaModal(HeaderVideo)}
              src={HeaderVideo}
              itemType="video/mp4"
              loop
              autoPlay
              muted
              half={false}
            />
            <div>
              <ProjectTitle text={`Procedural Animation`} />
              <TechList fitContent={true} icons={ProceduralAnimTech} websites={<React.Fragment />} />
              <h3>Sole Developer</h3>
              <S.ProjectHeaderText>{`Using Unity and machine learning to generate a self balancing walking biped.`}</S.ProjectHeaderText>
              <S.ProjectText>
                <span>{`Every joint has a scalar value for every axis it can rotate about, in the beginning, all of these scalars are set to high values, forcing the biped to fulfill the desired movement but for it to look more natural each scalar would have to be tweaked separately. The most painless way to do this is by using a Machine Learning algorithm.`}</span>
              </S.ProjectText>
            </div>
            <S.ProjectText>
              <span>
                {`After running all the scalars of the model through an `}{" "}
                <a href="https://en.wikipedia.org/wiki/Evolutionary_algorithm" target="_blank" rel="noopener noreferrer">
                  Evolutionary Machine Learning algorithm
                </a>{" "}
                {` the movement becomes much more natural. It also corrects foot placement based on its center of mass velocity.`}
              </span>
              {`While I learned a lot about procedural animation and Machine Learning working on this project, I also learned a lot about Unity's physics and creating stable rigidbody setups.`}
            </S.ProjectText>
            <S.VideoContainer style={{ height: "300px", backgroundColor: "rgba(0, 0, 0, 0.1)", borderRadius: "5px" }}>
              <S.ProjectVideo
                onClick={() => OpenMediaModal(MainVideo)}
                src={MainVideo}
                itemType="video/mp4"
                loop
                autoPlay
                muted
                half={false}
              />
            </S.VideoContainer>
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

export default ProcAnim;
