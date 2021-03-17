import React from "react";
import { MidWrapper } from "globalStyles/wrappers";
import ProjectPreview from "components/Project/ProjectPreview";
import TubeImage from "assets/images/Tube/Tube_image.jpg";
import BirdImage from "assets/images/BirdGame/birdHeader.jpg";
import { useHistory } from "react-router-dom";
import { TubeTech, BirdTech } from "utils/techLists";

const Games = () => {
  let history = useHistory();

  return (
    <MidWrapper>
      <ProjectPreview
        image={TubeImage}
        title={"TUBE"}
        role={"Programming / Animation"}
        text={`Tube is an FPS Horror game where your goal is to get to the end of the generated level, fighting through enemies, and eating donuts along the way.`}
        techIcons={TubeTech}
        onClick={() => history.push("/projects/games/tube")}
      />
      <ProjectPreview
        image={BirdImage}
        title={"Bird Game"}
        role={"Sole Developer"}
        text={`A Flappy Bird clone create with PixiJS.`}
        techIcons={BirdTech}
        onClick={() => history.push("/projects/games/bird")}
      />
    </MidWrapper>
  );
};

export default Games;
