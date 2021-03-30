import styled from "styled-components";
import Modal from "styled-react-modal";

export const StyledModal = Modal.styled`
  position: fixed;
  z-index: 2000;
  pointer-events: auto;
`;

export const ModalImg = styled.img`
  max-width: 95vw;
  max-height: 95vh;

  &:hover {
    cursor: pointer;
  }
`;

export const ModalVideo = styled.video`
  max-width: 95vw;
  max-height: 95vh;

  &:hover {
    cursor: pointer;
  }
`;
