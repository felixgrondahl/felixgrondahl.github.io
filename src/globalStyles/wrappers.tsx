import styled from "styled-components";
import { device } from "globalStyles/breakpoints";

export const MidWrapper = styled.div`
  position: relative;
  background: radial-gradient(59.59% 100% at 50% 0%, rgba(53, 146, 191, 0.9) 30.73%, rgba(48, 43, 79, 0.9) 100%);
  border-radius: 10px;
  max-width: 1500px;
  height: calc(100vh - 180px);
  top: 100px;
  margin: auto;
  padding: 40px 0px;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  pointer-events: auto;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  scrollbar-width: thin;
  scrollbar-color: #cacaca #0a0a0a;

  &::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #0a0a0a; /* color of the tracking area */
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cacaca; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid #0a0a0a; /* creates padding around scroll thumb */
  }

  @media (max-height: 900px) {
    height: calc(100vh - 170px);
  }

  @media ${device.tablet} {
    height: calc(100vh - 150px);
    top: 130px;
    transform: none;
    padding: 15px 0px;

    &::-webkit-scrollbar {
      width: 7px; /* width of the entire scrollbar */
    }
  }
`;

export const ProjectMidWrapper = styled(MidWrapper)`
  background: radial-gradient(100% 100% at 50% 0%, #373737 0%, #000000 100%);
`;
