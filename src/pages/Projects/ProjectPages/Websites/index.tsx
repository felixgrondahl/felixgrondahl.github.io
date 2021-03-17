import React from "react";
import { MidWrapper } from "globalStyles/wrappers";
import ProjectPreview from "components/Project/ProjectPreview";
import PgronImage from "assets/images/PgronGallery.png";
import PgronShopImage from "assets/images/PgronShop.jpg";
import { useHistory } from "react-router-dom";
import { pgronGalleryTech, pgronShopTech } from "utils/techLists";

const Websites = () => {
  let history = useHistory();

  return (
    <MidWrapper>
      <ProjectPreview
        image={PgronImage}
        title={"Peter Grondahl Gallery"}
        role={"Sole Developer"}
        text={`A minimalistic art gallery page for Peter Gröndahl created with React.`}
        techIcons={pgronGalleryTech}
        onClick={() => history.push("/projects/websites/pgrongallery")}
      />
      <ProjectPreview
        image={PgronShopImage}
        title={"PGRON SHOP"}
        role={"Sole Developer"}
        text={`PGRON SHOP is a lightweight serverside rendered webshop created with NextJs.`}
        techIcons={pgronShopTech}
        onClick={() => history.push("/projects/websites/pgronshop")}
      />
    </MidWrapper>
  );
};

export default Websites;
