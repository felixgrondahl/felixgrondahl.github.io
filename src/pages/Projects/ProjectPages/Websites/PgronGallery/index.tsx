import React from "react";
import * as S from "../../project-styles";
import { Wrapper } from "../../../style";
import HeaderImage from "../../../../../assets/images/PgronGallery/PgronGalleryHeader.png";
import MainImage from "../../../../../assets/images/PgronGallery/PgronGalleryMain.jpg";

const ProjectPage = () => {
  return (
    <>
      <S.ProjectBackground />
      <Wrapper>
        <S.ProjectWrapper>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
          <S.ProjectTitle>Peter Grondahl Gallery</S.ProjectTitle>
          <S.ProjectBody>
            <S.ProjectImage src={HeaderImage} />
            <p>{`Pellentesque fermentum gravida magna non ultricies. Sed vestibulum arcu ut eros imperdiet, id interdum turpis viverra. Curabitur dignissim ultrices ante sed posuere. Pellentesque eu pellentesque erat. Nunc pulvinar viverra arcu sed accumsan. Maecenas id libero augue. Nulla ac egestas lectus.`}</p>
            <p>{`Pellentesque fermentum gravida magna non ultricies. Sed vestibulum arcu ut eros imperdiet, id interdum turpis viverra. Curabitur dignissim ultrices ante sed posuere. Pellentesque eu pellentesque erat. Nunc pulvinar viverra arcu sed accumsan. Maecenas id libero augue. Nulla ac egestas lectus.`}</p>
            <S.ProjectImage src={MainImage} />
          </S.ProjectBody>
        </S.ProjectWrapper>
      </Wrapper>
    </>
  );
};

export default ProjectPage;
