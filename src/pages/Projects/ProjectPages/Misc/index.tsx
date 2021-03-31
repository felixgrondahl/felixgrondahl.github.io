import React from "react";
import { MidWrapper } from "globalStyles/wrappers";
import ProjectPreview from "components/Project/ProjectPreview";
import Header from "assets/images/ProceduralAnimation/header.jpg";
import { useHistory } from "react-router-dom";
import { ProceduralAnimTech } from "utils/techLists";
import { Helmet } from "react-helmet";

const Misc = () => {
  let history = useHistory();

  return (
    <MidWrapper>
      <Helmet>
        <title>Felix Gröndahl | Misc</title>
        <meta name="description" content="Felix Gröndahl frontend web developer. Misc portfolio projects" />
        <link rel="canonical" href="https://felixgrondahl.github.io/projects/misc" />
        <meta property="og:url" content="https://felixgrondahl.github.io/projects/misc" />
        <meta property="og:title" content="Felix Gröndahl Portfolio | Projects | Misc" />
        <meta property="og:description" content="Felix Gröndahl - Misc projects." />
      </Helmet>

      <ProjectPreview
        image={Header}
        title={"Procedural Animation"}
        role={"Sole Developer"}
        text={`Using Unity and machine learning to generate a self balancing walking biped.`}
        techIcons={ProceduralAnimTech}
        onClick={() => history.push("/projects/misc/proceduralanimation")}
      />
    </MidWrapper>
  );
};

export default Misc;
