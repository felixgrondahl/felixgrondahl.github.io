import React from "react";
import { MidWrapper } from "globalStyles/wrappers";
import ProjectPreview from "components/Project/ProjectPreview";
import TubeImage from "assets/images/Tube/Tube_image.jpg";
import BirdImage from "assets/images/BirdGame/birdHeader.jpg";
import { useHistory } from "react-router-dom";
import { TubeTech, BirdTech } from "utils/techLists";
import { Helmet } from "react-helmet";

const Games = () => {
  let history = useHistory();

  return (
    <MidWrapper>
      <Helmet>
        <title>Felix Gröndahl | Games</title>
        <meta name="description" content="Felix Gröndahl frontend web developer. Game projects." />
        <link rel="canonical" href="https://felixgrondahl.github.io/projects/games" />
        <meta property="og:url" content="https://felixgrondahl.github.io/projects/games" />
        <meta property="og:title" content="Felix Gröndahl Portfolio | Projects | Games" />
        <meta property="og:description" content="Felix Gröndahl - Game Projects." />
      </Helmet>

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
