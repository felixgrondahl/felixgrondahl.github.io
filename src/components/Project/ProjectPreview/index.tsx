import React from "react";
import { ProjectWrapper, ProjectText, ProjectImg, ContentWrapper, ProjectRole } from "./style";
import ProjectTitle from "../ProjectTitle";
import TechUsed from "components/TechList";

const ProjectPreview = ({
  image,
  title,
  role,
  text,
  techIcons = [],
  onClick,
}: {
  image: string;
  title: string;
  role: string;
  text: string;
  techIcons: any[];
  onClick: Function;
}) => {
  return (
    <ProjectWrapper onClick={() => onClick()}>
      <ContentWrapper>
        <ProjectImg imgSource={image} />
        <ProjectText>
          <ProjectTitle text={title} />
            <ProjectRole>{role}</ProjectRole>
            <TechUsed>{techIcons}</TechUsed>
            <p>{text}</p>

        </ProjectText>
      </ContentWrapper>
    </ProjectWrapper>
  );
};

export default ProjectPreview;
