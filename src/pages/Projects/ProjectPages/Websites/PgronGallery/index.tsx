import React from "react";
import * as S from "pages/Projects/project-styles";
import ProjectTitle from "components/Project/ProjectTitle";
import HeaderImage from "assets/images/PgronGallery/PgronGalleryHeader.png";
import MainImage from "assets/images/PgronGallery/PgronGalleryMain.jpg";

const ProjectPage = () => {
  return (
    <>
      <S.ProjectBackground />
      <S.Wrapper>
        <S.ProjectWrapper>
          <S.ProjectBody>
            <ProjectTitle text={`Peter Grondahl Gallery`} />
            <S.ProjectImage src={HeaderImage} />
            <p>{`Pellentesque fermentum gravida magna non ultricies. Sed vestibulum arcu ut eros imperdiet, id interdum turpis viverra. Curabitur dignissim ultrices ante sed posuere. Pellentesque eu pellentesque erat. Nunc pulvinar viverra arcu sed accumsan. Maecenas id libero augue. Nulla ac egestas lectus.`}</p>
            <p>{`Pellentesque fermentum gravida magna non ultricies. Sed vestibulum arcu ut eros imperdiet, id interdum turpis viverra. Curabitur dignissim ultrices ante sed posuere. Pellentesque eu pellentesque erat. Nunc pulvinar viverra arcu sed accumsan. Maecenas id libero augue. Nulla ac egestas lectus.`}</p>
            <S.ProjectImage src={MainImage} />
          </S.ProjectBody>
        </S.ProjectWrapper>
      </S.Wrapper>
    </>
  );
};

export default ProjectPage;
