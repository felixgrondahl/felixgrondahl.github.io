import styled from "styled-components";
import { device } from "globalStyles/breakpoints";
import { animated } from "react-spring";

export const ProjectWrapper = styled(animated.div)`
  cursor: pointer;
  height: 320px;
  width: 80%;
  margin: auto;
  margin-bottom: 40px;

  border-radius: 5px;

  &:last-child {
    margin-bottom: 0px;
  }

  @media ${device.tablet} {
    /* margin-bottom: 0px; */
    padding-top: 10px;
    width: 90%;
    margin-bottom: 10px;
  }
`;

export const ImgWrapper = styled.div`
  height: 100%;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 4.5fr;
  grid-template-rows: auto;
  gap: 30px;
  width: 100%;
  height: 100%;
  margin: auto;

  box-shadow: 13px 11px 16px -6px rgba(0, 0, 0, 0.25);

  &:hover {
    .projectImg {
      transform: scale(1.025);
    }

    .moreInfo {
      opacity: 1;
    }
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;

    gap: 0px;
    width: 93%;
    border-bottom: none;
  }
`;

export const ProjectImg = styled.div<{ imgSource: string }>`
  height: 100%;
  background-image: ${(props) => `url(${props.imgSource})`};
  background-position: center;
  background-size: cover;
  border-radius: 5px;

  transition: transform 0.2s ease-in-out;
`;

export const ProjectText = styled.div`
  position: relative;
  padding: 20px 20px 20px 0;

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

  @media ${device.tablet} {
    padding-right: 0;
  }
`;

export const MoreInfo = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  opacity: 0.8;
  padding: 23px 30px;

  p {
    display: inline-block;
    margin: 0;
    line-height: 100%;
    letter-spacing: 0.1em;
    padding-right: 8px;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const ProjectTitle = styled.h2`
  display: inline-block;
  padding-left: 5px;
`;

export const ProjectRole = styled.h3``;
