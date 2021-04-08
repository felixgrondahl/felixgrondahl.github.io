import styled from "styled-components";
import { device } from "globalStyles/breakpoints";

export const ProjectBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const ProjectWrapper = styled.div``;

export const ProjectBody = styled.div`
  display: grid;
  grid-template-columns: 4fr 4.5fr;
  grid-template-rows: auto;
  gap: 40px;
  width: 80%;
  margin: auto;

  h3 {
    padding-top: 5px;
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-x: hidden;
    padding-bottom: 20px;
  }
`;

export const ProjectHeaderText = styled.p`
  font-weight: 400;
  font-size: 1.1em;
  letter-spacing: 0.085em;
  margin: 5px 0px;

  @media ${device.tablet} {
    font-size: 1em;
    font-weight: 400;
  }
`;

export const ProjectText = styled.p`
  span {
    display: block;
    margin-bottom: 20px;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 500px;
  display: inline-block;
  border-radius: 5px;
  object-fit: cover;
  cursor: pointer;
`;

export const ProjectHalfImage = styled(ProjectImage)`
  width: 48%;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProjectVideo = styled.video<{ half: boolean }>`
  position: relative;
  max-width: ${(props) => (props.half ? "45%" : "100%")};
  object-fit: contain;
  display: inline-block;
  border-radius: 5px;

  cursor: pointer;
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProjectLinkWrapper = styled.div`
  width: 400px;
  height: 35px;
  line-height: 35px;
  display: flex;
  align-items: center;

  a:nth-child(2) {
    margin-left: 40px;
  }
`;

export const ProjectLink = styled.a``;
