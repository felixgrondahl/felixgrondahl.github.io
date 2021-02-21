import React from "react";
import * as S from "../../style";

const ProjectPage = () => {
  return (
    <S.Wrapper>
      <S.ProjectBackground />
      <S.ProjectWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
        </svg>
        <S.ProjectTitle>Peter Grondahl Gallery</S.ProjectTitle>
      </S.ProjectWrapper>
    </S.Wrapper>
  );
};

export default ProjectPage;
