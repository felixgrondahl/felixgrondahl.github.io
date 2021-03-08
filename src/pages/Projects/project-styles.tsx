import styled from "styled-components";
// import { isPropertySignature } from "typescript";

export const ProjectBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  /* background-color: rgba(0, 0, 0, 0.5); */
`;

export const ProjectWrapper = styled.div``;

export const ProjectBody = styled.div`
  display: grid;
  grid-template-columns: 4fr 4.5fr;
  grid-template-rows: auto;
  gap: 40px;
  width: 80%;
  margin: auto;
`;

export const ProjectHeaderText = styled.p`
  font-weight: 300;
  font-size: 1.1em;
  letter-spacing: 0.085em;
  margin: 5px 0px 20px 0px;
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
  display: inline-block;
  border-radius: 5px;
  object-fit: cover;
`;

export const ProjectHalfImage = styled(ProjectImage)`
  width: 48%;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProjectVideo = styled.video<{half: boolean}>`
  position: relative;
  /* height: 100%; */
  max-width: ${props => props.half ? "45%" : "100%"};
  object-fit: contain;
  display: inline-block;
  border-radius: 5px;
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
