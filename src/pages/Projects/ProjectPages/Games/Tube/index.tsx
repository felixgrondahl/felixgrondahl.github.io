import React, { useState } from "react";
import * as S from "pages/Projects/project-styles";
import { ProjectMidWrapper } from "globalStyles/wrappers";
import ProjectTitle from "components/Project/ProjectTitle";
import TechList from "components/TechList";
import { TubeTech } from "utils/techLists";

import HeaderVideo from "assets/images/Tube/intro.mp4";
import RunVideo from "assets/images/Tube/run.mp4";
import IdleVideo from "assets/images/Tube/idle.mp4";
import MapGenVideo from "assets/images/Tube/mapgen.mp4";
import ProjectLinks from "components/Project/ProjectLinks";
import { ModalProvider } from "styled-react-modal";
import MediaModal from "components/ImageModal";

const Tube = () => {
  const [showModal, setShowModal] = useState({ show: false, media: "" });

  const OpenMediaModal = (media: string) => {
    setShowModal({ show: true, media: media });
  };

  return (
    <>
      <ProjectMidWrapper>
        <S.ProjectWrapper>
          <S.ProjectBody>
            <S.VideoContainer>
              <S.ProjectVideo onClick={() => OpenMediaModal(HeaderVideo)} src={HeaderVideo} itemType="video/mp4" loop autoPlay muted half={false} />
            </S.VideoContainer>

            <div>
              <ProjectTitle text={`TUBE`} />
              <TechList
                fitContent={false}
                icons={TubeTech}
                websites={<ProjectLinks github={""} website={"https://helmetbox.itch.io/tube"} />}
              />

              <h3>Programming / Animation</h3>
              <S.ProjectHeaderText>{`Tube is an FPS Horror game where your goal is to get to the end of the generated level, fighting through enemies, and eating donuts along the way.`}</S.ProjectHeaderText>

              <S.ProjectText>
                <span>{`TUBE is a game where I wanted to put my knowledge to the test. I knew I wanted to include some kind of procedurally generated levels as well as procedural animation. While I had done both of these types of work separately before, the challenge here was to implement these in a short timeframe of a couple of weeks to fit the scope of the game.`}</span>
                <span>
                  {`Creating the Enemy animations I knew that using a Machine Learning solution would probably take too much time to both setup and train. So instead I went with a simpler approach of using an animation reference the rigidbodies would then try to copy. This was done using `}
                  <a href="https://en.wikipedia.org/wiki/PID_controller">P(I)D-Controllers</a>{" "}
                  {` on all the joints to calculate how much torque to apply to reach its respective target angle of the reference.`}
                </span>
              </S.ProjectText>
            </div>
            <div>
              <S.ProjectText>{`To generate the levels I used a Tile-based approach. First I generate the 'Main Path' making sure the player always can go from start to end. Then from the main path, I generate 'side paths' that have min/max lengths.`}</S.ProjectText>
              <S.ProjectVideo
                onClick={() => OpenMediaModal(MapGenVideo)}
                src={MapGenVideo}
                itemType="video/mp4"
                loop
                autoPlay
                muted
                half={false}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <S.ProjectVideo onClick={() => OpenMediaModal(RunVideo)} src={RunVideo} itemType="video/mp4" loop autoPlay muted half={true} />
              <S.ProjectVideo onClick={() => OpenMediaModal(IdleVideo)} src={IdleVideo} itemType="video/mp4" loop autoPlay muted half={true} />
            </div>
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

export default Tube;
