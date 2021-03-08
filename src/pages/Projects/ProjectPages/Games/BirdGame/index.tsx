import React from "react";
import * as S from "pages/Projects/project-styles";
import { MidWrapper } from "globalStyles/wrappers";
import ProjectTitle from "components/Project/ProjectTitle";
import HeaderImage from "assets/images/BirdGame/birdHeader.jpg";
import gameplayVideo from "assets/images/BirdGame/birdclone-ingame.mp4";
import TechList from "components/TechList";
import { BirdTech } from "utils/techLists";

const BirdGame = () => {
  return (
    <MidWrapper>
      <S.ProjectWrapper>
        <S.ProjectBody>
          <S.ProjectImage src={HeaderImage} />
          <div>
            <ProjectTitle text={`Bird Game`} />

            <TechList>{BirdTech}</TechList>
            <S.ProjectText>
              <span>{`Pellentesque fermentum gravida magna non ultricies. Sed vestibulum arcu ut eros imperdiet, id interdum turpis viverra. Curabitur dignissim ultrices ante sed posuere. Pellentesque eu pellentesque erat. Nunc pulvinar viverra arcu sed accumsan. Maecenas id libero augue. Nulla ac egestas lectus.`}</span>
              <span>{`In id bibendum arcu, at pretium dolor. Nunc placerat pulvinar diam, quis hendrerit purus iaculis id. Nulla sed lobortis orci, nec fringilla tellus. Ut accumsan quam eget accumsan varius. Fusce ac ante vitae libero lacinia pretium.
Nunc vestibulum placerat ipsum. Sed et suscipit mi. In lectus erat, aliquet quis vestibulum id, viverra id ante. Duis faucibus eu libero vel sagittis. Nunc ullamcorper eu ipsum vulputate consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in tortor imperdiet, feugiat leo sed, mattis elit. Curabitur ac aliquam lacus.`}</span>
            </S.ProjectText>
          </div>
          <S.ProjectText>{`Pellentesque fermentum gravida magna non ultricies. Sed vestibulum arcu ut eros imperdiet, id interdum turpis viverra. Curabitur dignissim ultrices ante sed posuere. Pellentesque eu pellentesque erat. Nunc pulvinar viverra arcu sed accumsan. Maecenas id libero augue. Nulla ac egestas lectus.`}</S.ProjectText>
          <S.ProjectVideo src={gameplayVideo} itemType="video/mp4" loop autoPlay muted half={false} />
        </S.ProjectBody>
      </S.ProjectWrapper>
    </MidWrapper>
  );
};

export default BirdGame;
