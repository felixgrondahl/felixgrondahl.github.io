import React, { useState } from "react";
import * as S from "pages/Projects/project-styles";
import { ProjectMidWrapper } from "globalStyles/wrappers";
import ProjectTitle from "components/Project/ProjectTitle";
import HeaderImage from "assets/images/BirdGame/birdHeader.jpg";
import gameplayVideo from "assets/images/BirdGame/birdclone-ingame.mp4";
import TechList from "components/TechList";
import { BirdTech } from "utils/techLists";
import ProjectLinks from "components/Project/ProjectLinks";
import MediaModal from "components/ImageModal";
import { ModalProvider } from "styled-react-modal";

const BirdGame = () => {
  const [showModal, setShowModal] = useState({ show: false, media: "" });

  const OpenMediaModal = (media: string) => {
    setShowModal({ show: true, media: media });
  };

  return (
    <>
      <ProjectMidWrapper>
        <S.ProjectWrapper>
          <S.ProjectBody>
            <S.ProjectImage onClick={() => OpenMediaModal(HeaderImage)} src={HeaderImage} />
            <div>
              <ProjectTitle text={`Bird Game`} />
              <TechList
                fitContent={false}
                icons={BirdTech}
                websites={<ProjectLinks github={"https://github.com/felixgrondahl/birdclone"} website={""} />}
              />
              <h3>Sole Developer</h3>
              <S.ProjectHeaderText>{`A Flappy Bird clone create with PixiJS.`}</S.ProjectHeaderText>

              {/* <div>{BirdTech}</div>
            </TechList> */}
              <S.ProjectText>
                <span>{`Coming from a background of in game development using Unity I wanted to create a simple web browser game using typescript and PixiJS.`}</span>
                <span>{`In Flappybird you fly through infinitely generating obstacles so I knew I had to build a generator to place the trees at the correct x-offset from eachother and reseting their poisitons when they exit the screen.
              At game load I spawn the obsticle sprites offscreen (making sure there are enough to fill the screen width), and start moving them in the negative x-direction towards the player.
	            Making sure to only reuse and reposition the obstacles that exits the screen, preventing unnecessary spawning of new sprites.`}</span>
              </S.ProjectText>
            </div>
            <S.ProjectText>
              <span>
                {`For the background I used PixiJs TilingSprite to tile each background layer, and move each layer at different speeds creating the parallax effect.`}
              </span>
              <span>
                {`One problem I encountered was that since the player sprite was a square, its bounding box extended outside the sprite itself, using this sprite as a collider to determine
                when the player collides with an obstacle, would often result in a scenarios that felt unfair to the player.
                To solve this I instead created a custom collider for the player which is slightly smaller than the players sprite, giving a player a slight leeway
                (allowing the player sprite to slightly touch the obstacles without resulting in an immidiate loss) creating an experience which feels more fair and fun.`}
              </span>
            </S.ProjectText>
            <S.ProjectVideo onClick={() => OpenMediaModal(gameplayVideo)} src={gameplayVideo} itemType="video/mp4" loop autoPlay muted half={false} />
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

export default BirdGame;
