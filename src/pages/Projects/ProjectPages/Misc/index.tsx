import React from "react";
import { MidWrapper } from "globalStyles/wrappers";
import ProjectPreview from "components/Project/ProjectPreview";
import PgronImage from "assets/images/PgronGallery.png";
// import PgronShopImage from "assets/images/PgronShop.jpg";
import { useHistory } from "react-router-dom";
import { pgronGalleryTech } from "utils/techLists";

const Misc = () => {
  let history = useHistory();

  return (
    <MidWrapper>
      <ProjectPreview
        image={PgronImage}
        title={"Procedural Animation"}
        text={`Pellentesque fermentum gravida magna non ultricies. Sed vestibulum arcu ut eros imperdiet, id interdum turpis viverra. Curabitur dignissim ultrices ante sed posuere. Pellentesque eu pellentesque erat. Nunc pulvinar viverra arcu sed accumsan. Maecenas id libero augue. Nulla ac egestas lectus.`}
        techIcons={pgronGalleryTech}
        onClick={() => history.push("/projects/misc/proceduralanimation")}
      />
    </MidWrapper>
  );
};

export default Misc;
