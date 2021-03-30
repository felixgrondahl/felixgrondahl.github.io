import React, { useState } from "react";
import * as S from "pages/Projects/project-styles";
import { ProjectMidWrapper } from "globalStyles/wrappers";
import ProjectTitle from "components/Project/ProjectTitle";
import HeaderImage from "assets/images/PgronShop/pgronshop-main.jpg";
import MainImageLeft from "assets/images/PgronShop/pgronshop-mmain.jpg";
import MainImageRight from "assets/images/PgronShop/pgronshop-m-gallery.jpg";
import TechList from "components/TechList";
import { pgronShopTech } from "utils/techLists";
import ProjectLinks from "components/Project/ProjectLinks";
import MediaModal from "components/ImageModal";
import { ModalProvider } from "styled-react-modal";

const PgronShop = () => {
  const [showModal, setShowModal] = useState({ show: false, media: "" });

  const OpenMediaModal = (media: string) => {
    setShowModal({ show: true, media: media });
  };

  return (
    <>
      <ProjectMidWrapper>
        <S.ProjectWrapper>
          <S.ProjectBody>
            <S.ProjectImage onClick={() => OpenMediaModal(HeaderImage)} src={HeaderImage} />
            <div>
              <ProjectTitle text={`PGRON SHOP`} />
              <TechList
                fitContent={false}
                icons={pgronShopTech}
                websites={<ProjectLinks github={""} website={"https://pgronshop.netlify.app/"} />}
              />
              <h3>Sole Developer</h3>
              <S.ProjectHeaderText>{`PGRON SHOP is a lightweight serverside rendered webshop created with NextJs.`}</S.ProjectHeaderText>

              <S.ProjectText>
                <span>{`With PGRON SHOP I was asked to create a lightweight and fast webshop.
	Having worked with REACT in the past, NextJS with server side rendering felt like the obvious choice.`}</span>
                <span>{`With the shopping cart I just made sure to save the customers cart data to a cookie, this cookie would then be send to the backend when the user needs to see updated cart info, this will then allow the backend to render the needed elements and return the updated static site to the user.`}</span>
              </S.ProjectText>
            </div>
            <S.ProjectText>
              <span>
                {`When it came to adapting the page to mobile devices,
              I wanted to create something that feelt like it was made for mobile. Too often do I see mobile adapted pages with very small buttons and crammed UI's,
              So I wanted to make sure the UI/UX made sense and felt natural on mobile.`}
              </span>
            </S.ProjectText>
            <S.ImageContainer>
              <S.ProjectHalfImage onClick={() => OpenMediaModal(MainImageLeft)} src={MainImageLeft} />
              <S.ProjectHalfImage onClick={() => OpenMediaModal(MainImageRight)} src={MainImageRight} />
            </S.ImageContainer>
          </S.ProjectBody>
        </S.ProjectWrapper>
      </ProjectMidWrapper>
      <ModalProvider>
        <MediaModal
          media={showModal.media}
          isOpen={showModal.show}
          hideModal={() => setShowModal({ show: false, media: "" })}
        />
      </ModalProvider>
    </>
  );
};

export default PgronShop;
