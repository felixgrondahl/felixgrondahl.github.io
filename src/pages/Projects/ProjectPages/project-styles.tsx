import styled from "styled-components";

export const ProjectBackground = styled.div`
  position: absolute;
  /* top: 0;
  right: 0;
  bottom: 0;
  left: 0; */
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ProjectWrapper = styled.div`
  /* position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; */
`;

export const ProjectTitle = styled.h2`
  display: inline-block;
  padding-left: 5px;
`;

export const ProjectBody = styled.div`
  display: grid;
  grid-template-columns: 4fr 4.5fr;
  grid-template-rows: auto;
  gap: 20px;
  width: 83%;
  padding: 20px;
  margin: auto;
`;

export const ProjectImage = styled.img`
  width: 100%;
  display: inline-block;
  border-radius: 5px;
`;
