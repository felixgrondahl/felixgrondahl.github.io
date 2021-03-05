import React from "react";
import { MidWrapper } from "globalStyles/wrappers";
import ProjectPreview from "components/Project/ProjectPreview";
import PgronImage from "assets/images/PgronGallery.png";
import PgronShopImage from "assets/images/PgronShop.jpg";
import { useHistory } from "react-router-dom";
import { pgronGalleryTech, pgronShopTech } from "utils/techLists";

const Games = () => {
  let history = useHistory();

  return (
    <MidWrapper>
      <ProjectPreview
        image={PgronImage}
        title={"TUBE"}
        text={`Pellentesque fermentum gravida magna non ultricies. Sed vestibulum arcu ut eros imperdiet, id interdum turpis viverra. Curabitur dignissim ultrices ante sed posuere. Pellentesque eu pellentesque erat. Nunc pulvinar viverra arcu sed accumsan. Maecenas id libero augue. Nulla ac egestas lectus.`}
        techIcons={pgronGalleryTech}
        onClick={() => history.push("/projects/games/tube")}
      />
      <ProjectPreview
        image={PgronShopImage}
        title={"Bird Game"}
        text={`In id bibendum arcu, at pretium dolor. Nunc placerat pulvinar diam, quis hendrerit purus iaculis id. Nulla sed lobortis orci, nec fringilla tellus. Ut accumsan quam eget accumsan varius. Fusce ac ante vitae libero lacinia pretium. Nunc vestibulum placerat ipsum. Sed et suscipit mi. In lectus erat, aliquet quis vestibulum id, viverra id ante. Duis faucibus eu libero vel sagittis.`}
        techIcons={pgronShopTech}
        onClick={() => history.push("/projects/games/bird")}
      />
    </MidWrapper>
  );
};

export default Games;
