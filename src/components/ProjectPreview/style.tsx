import styled from "styled-components";

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 250px;
  width: 100%;
  margin-bottom: 40px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ProjectImg = styled.div<{ imgSource: string }>`
  width: 35%;
  height: 100%;
  background-image: ${(props) => `url(${props.imgSource})`};
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  margin-right: 20px;
`;

export const ProjectText = styled.div`
  width: 48%;
  height: 100%;

  p {
    padding-left: 20px;
    margin-top: 6px;
  }
`;

export const ProjectTitle = styled.h2`
  display: inline-block;
  padding-left: 5px;
`;
