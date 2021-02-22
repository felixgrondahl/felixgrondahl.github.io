import React from "react";
import { Wrapper } from "./style";
import ProjectPreview from "../../components/ProjectPreview";
import PgronImage from "../../assets/images/PgronGallery.png";
import PgronShopImage from "../../assets/images/PgronShop.jpg";
import { useHistory } from "react-router-dom";

const Projects = () => {
  let history = useHistory();

  return (
    <Wrapper>
      <ProjectPreview
        image={PgronImage}
        title={"Peter Grondahl Gallery"}
        text={`Pellentesque fermentum gravida magna non ultricies. Sed vestibulum arcu ut eros imperdiet, id interdum turpis viverra. Curabitur dignissim ultrices ante sed posuere. Pellentesque eu pellentesque erat. Nunc pulvinar viverra arcu sed accumsan. Maecenas id libero augue. Nulla ac egestas lectus.`}
        onClick={() => history.push("/projects/pgrongallery")}
      />
      <ProjectPreview
        image={PgronShopImage}
        title={"PGRON SHOP"}
        text={`In id bibendum arcu, at pretium dolor. Nunc placerat pulvinar diam, quis hendrerit purus iaculis id. Nulla sed lobortis orci, nec fringilla tellus. Ut accumsan quam eget accumsan varius. Fusce ac ante vitae libero lacinia pretium. Nunc vestibulum placerat ipsum. Sed et suscipit mi. In lectus erat, aliquet quis vestibulum id, viverra id ante. Duis faucibus eu libero vel sagittis.`}
        onClick={() => history.push("/projects/pgrongallery")}
      />
      {/* <ProjectPreview
        image={PgronImage}
        title={"Peter Grondahl Gallery"}
        text={`Pellentesque fermentum gravida magna non ultricies. Sed vestibulum arcu ut eros imperdiet, id interdum turpis viverra. Curabitur dignissim ultrices ante sed posuere. Pellentesque eu pellentesque erat. Nunc pulvinar viverra arcu sed accumsan. Maecenas id libero augue. Nulla ac egestas lectus.`}
      /> */}
    </Wrapper>
  );
};

export default Projects;
