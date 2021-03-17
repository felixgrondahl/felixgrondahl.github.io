import React from "react";
import { MidWrapper } from "globalStyles/wrappers";
import ProjectPreview from "components/Project/ProjectPreview";
import Header from "assets/images/ProceduralAnimation/header.jpg";
import { useHistory } from "react-router-dom";
import { ProceduralAnimTech } from "utils/techLists";

const Misc = () => {
  let history = useHistory();

  return (
    <MidWrapper>
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
