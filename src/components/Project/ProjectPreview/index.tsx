import React from "react";
import { ProjectWrapper, ProjectText, ProjectImg, ContentWrapper } from "./style";
import ProjectTitle from "../ProjectTitle";

const ProjectPreview = ({
  image,
  title,
  text,
  onClick,
}: {
  image: string;
  title: string;
  text: string;
  onClick: Function;
}) => {
  return (
    <ProjectWrapper onClick={() => onClick()}>
      <ContentWrapper>
        <ProjectImg imgSource={image} />
        <ProjectText>
          <ProjectTitle text={title} />
          <p>{text}</p>
        </ProjectText>
      </ContentWrapper>
    </ProjectWrapper>
  );
};

export default ProjectPreview;
