import styled from "styled-components";
import { device } from "globalStyles/breakpoints";

export const ProjectWrapper = styled.div`
  height: 320px;
  width: 100%;
  margin-bottom: 40px;
  cursor: pointer;

  @media ${device.tablet} {
    margin-bottom: 0px;

  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 4.5fr;
  grid-template-rows: auto;
  gap: 30px;
  width: 80%;
  height: 100%;
  margin: auto;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;

    gap: 0px;
    width: 93%;
  }
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
    text-overflow: ellipsis;

    @media ${device.tablet} {
      font-size: 1em;
      letter-spacing: 0.055em;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      padding-bottom: 5px;
    }
  }
`;

export const ProjectTitle = styled.h2`
  display: inline-block;
  padding-left: 5px;
`;

export const ProjectRole = styled.h3``;
