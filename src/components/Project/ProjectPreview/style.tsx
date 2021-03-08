import styled from "styled-components";

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 320px;
  width: 100%;
  margin-bottom: 40px;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 4.5fr;
  grid-template-rows: auto;
  gap: 30px;
  width: 80%;
  height: 100%;
  margin: auto;
`;

export const ProjectImg = styled.div<{ imgSource: string }>`
  height: 100%;
  background-image: ${(props) => `url(${props.imgSource})`};
  background-position: center;
  background-size: cover;
  border-radius: 5px;
`;

export const ProjectText = styled.div`
  height: 100%;
  p {
    line-height: 1.5em;
    font-size: 1.1em;
    letter-spacing: 0.085em;
  }
`;

export const ProjectTitle = styled.h2`
  display: inline-block;
  padding-left: 5px;
`;
