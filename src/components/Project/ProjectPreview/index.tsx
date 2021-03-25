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
        <div style={{ height: "100%", overflow: "hidden" }}>
          <ProjectImg imgSource={image} className="projectImg" />
        </div>
        <ProjectText>
          <ProjectTitle text={title} />
          <ProjectRole>{role}</ProjectRole>
          <TechUsed>
            {techIcons.map((element, index) => (
              <React.Fragment key={index}>{element}</React.Fragment>
            ))}
          </TechUsed>
          <p>{text}</p>
        </ProjectText>
      </ContentWrapper>
    </ProjectWrapper>
  );
};

export default ProjectPreview;
