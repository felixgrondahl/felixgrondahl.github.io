import styled from "styled-components";
import Modal from "styled-react-modal";

export const StyledModal = Modal.styled`
  position: fixed;
  z-index: 2000;
  pointer-events: auto;
  width: 100%;
  height: 100%;
`;

export const ModalImg = styled.img`
  max-width: 95vw;
  max-height: 95vh;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    cursor: pointer;
  }
`;

export const ModalVideo = styled.video`
  max-width: 95vw;
  max-height: 95vh;

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    cursor: pointer;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
