import React from "react";
import * as S from "pages/Projects/project-styles";
import { MidWrapper } from "globalStyles/wrappers";
import ProjectTitle from "components/Project/ProjectTitle";
import HeaderImage from "assets/images/BirdGame/birdHeader.jpg";
import gameplayVideo from "assets/images/BirdGame/birdclone-ingame.mp4";
import TechList from "components/TechList";
import { BirdTech } from "utils/techLists";
import ProjectLinks from "components/Project/ProjectLinks";

const BirdGame = () => {
  return (
    <MidWrapper>
      <S.ProjectWrapper>
        <S.ProjectBody>
          <S.ProjectImage src={HeaderImage} />
          <div>
            <ProjectTitle text={`Bird Game`} />
            <h3>Sole Developer</h3>
            <S.ProjectHeaderText>{`A Flappy Bird clone create with PixiJS.`}</S.ProjectHeaderText>
            <ProjectLinks github={"https://github.com/felixgrondahl/birdclone"} website={""}/>
            <TechList>{BirdTech}</TechList>
            <S.ProjectText>
              <span>{`	coming from game dev in Unity I wanted to create a simple game, in this case a flappy bird clone, using typescript and PixiJS.
	Since the scope of the game was pretty simple it would probably not have mattered which 2d framework I would have used. `}</span>
              <span>{`	For the obsticles i first at game load create the obsticle sprites (making sure there are enough to fill the level), and start moving them in the negative x-direction.
	making sure to only reuse and reposition the trees that exits the screen, preventing unnecessary instantiation of objects. At every time a obsticle section is reset
	I randomize its y-offset.`}</span>
            </S.ProjectText>
          </div>
          <S.ProjectText>
            <span>
              {`For the background I used PixiJs TilingSprite to tile each background layer, and move each layer at different speeds.`}
            </span>
            <span>
              {`Since the player sprite is a square which bounding box extends outside the sprite itself, using this sprite as a collider to determine the loose state, often would create a scenario where
	the player would loose the game through one of the invisible bounding box edges hitting the obsticle creating a feeling of unfairness.
	To solve this I instead created a custom collider for the player which is slightly smaller than the players sprite, while giving a player slight leeway
	(ex allowing the bird sprite to slightly touch the obsticles without resulting in an immidiate loss) creates a experience which feels more fair and fun.`}
            </span>
          </S.ProjectText>
          <S.ProjectVideo src={gameplayVideo} itemType="video/mp4" loop autoPlay muted half={false} />
        </S.ProjectBody>
      </S.ProjectWrapper>
    </MidWrapper>
  );
};

export default BirdGame;
