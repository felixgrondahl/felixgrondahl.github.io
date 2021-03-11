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
        text={`Pellentesque fermentum gravida magna non ultricies. Sed vestibulum arcu ut eros imperdiet, id interdum turpis viverra. Curabitur dignissim ultrices ante sed posuere. Pellentesque eu pellentesque erat. Nunc pulvinar viverra arcu sed accumsan. Maecenas id libero augue. Nulla ac egestas lectus.`}
        techIcons={ProceduralAnimTech}
        onClick={() => history.push("/projects/misc/proceduralanimation")}
      />
    </MidWrapper>
  );
};

export default Misc;
