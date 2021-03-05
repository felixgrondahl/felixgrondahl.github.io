import styled from "styled-components";

export const MidWrapper = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.48);
  border-radius: 10px;
  max-width: 1500px;
  height: 75vh;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  padding-top: 40px;
  overflow: auto;

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
`;