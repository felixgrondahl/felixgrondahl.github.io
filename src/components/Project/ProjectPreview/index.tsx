import React from "react";
import { ProjectWrapper, ProjectText, ProjectImg, ContentWrapper } from "./style";
import ProjectTitle from "../ProjectTitle";
import TechUsed from "components/TechList";

const ProjectPreview = ({
  image,
  title,
  text,
  techIcons = [],
  onClick,
}: {
  image: string;
  title: string;
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

            <TechUsed>{techIcons}</TechUsed>
            <p>{text}</p>

        </ProjectText>
      </ContentWrapper>
    </ProjectWrapper>
  );
};

export default ProjectPreview;
