import React from "react";
import { ModalImg, ModalVideo, StyledModal } from "./style";

const getFilename = (media: string) => {
  return media.split(".").pop();
};

const MediaModal = ({ media, isOpen, hideModal }: { media: string; isOpen: boolean; hideModal: Function }) => {
  return (
    <StyledModal isOpen={isOpen} onBackgroundClick={() => hideModal()} onEscapeKeydown={() => hideModal()}>
      {getFilename(media) === "jpg" || getFilename(media) === "png" ? (
        <ModalImg onClick={() => hideModal()} src={media} alt="preview" />
      ) : (
        <ModalVideo onClick={() => hideModal()} src={media} itemType="video/mp4" loop autoPlay muted />
      )}
    </StyledModal>
  );
};

export default MediaModal;
