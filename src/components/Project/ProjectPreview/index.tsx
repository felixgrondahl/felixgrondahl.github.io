import React, { useState } from "react";
import { ProjectWrapper, ProjectText, ProjectImg, ContentWrapper, ProjectRole, ImgWrapper, MoreInfo } from "./style";
import ProjectTitle from "../ProjectTitle";
import TechUsed from "components/TechList";
import { useSpring } from "react-spring";
import { ReactComponent as InfoArrow } from "assets/icons/iconmonstr-arrow-59.svg";

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
  const [hover, setHover] = useState(false);
  const hoverSpring = useSpring({
    background: hover
      ? "linear-gradient(230deg,rgba(3, 2, 6, 0) -26.69%,rgba(255, 255, 255, 0.17) 15.54%,rgba(0, 0, 0, 0) 54.96%), linear-gradient(0deg, #000000, #000000)"
      : "linear-gradient(230deg,rgba(3, 2, 6, 0) -26.69%,rgba(255, 255, 255, 0.17) 0%,rgba(0, 0, 0, 0) 54.96%), linear-gradient(0deg, #000000, #000000)",
    config: { mass: 1, tension: 200 },
  });

  return (
    <ProjectWrapper
      style={hoverSpring}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onClick()}
    >
      <ContentWrapper>
        <ImgWrapper>
          <ProjectImg imgSource={image} className="projectImg" />
        </ImgWrapper>
        <ProjectText>
          <ProjectTitle text={title} />
          <ProjectRole>{role}</ProjectRole>
          <TechUsed fitContent={true} icons={techIcons} websites={<React.Fragment />} />
          <p>{text}</p>
          <MoreInfo className="moreInfo">
            <p>More Info</p><InfoArrow />
          </MoreInfo>
        </ProjectText>
      </ContentWrapper>
    </ProjectWrapper>
  );
};

export default ProjectPreview;
