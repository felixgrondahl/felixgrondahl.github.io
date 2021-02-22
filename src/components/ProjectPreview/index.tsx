import React from "react";
import { ProjectWrapper, ProjectText, ProjectImg, ProjectTitle, ContentWrapper } from "./style";

const ProjectPreview = ({ image, title, text, onClick }: { image: string; title: string; text: string; onClick: Function }) => {
  return (
    <ProjectWrapper onClick={() => onClick()}>
      <ContentWrapper>
        <ProjectImg imgSource={image} />
        <ProjectText>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
          <ProjectTitle>{title}</ProjectTitle>
          <p>{text}</p>
        </ProjectText>
      </ContentWrapper>
    </ProjectWrapper>
  );
};

export default ProjectPreview;
