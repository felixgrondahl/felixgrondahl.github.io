import React from "react";
import * as S from "pages/Projects/project-styles";
import { MidWrapper } from "globalStyles/wrappers";
import ProjectTitle from "components/Project/ProjectTitle";
import HeaderImage from "assets/images/PgronShop/pgronshop-main.jpg";
import MainImageLeft from "assets/images/PgronShop/pgronshop-mmain.jpg";
import MainImageRight from "assets/images/PgronShop/pgronshop-m-gallery.jpg";
import TechList from "components/TechList";
import { pgronShopTech } from "utils/techLists";
import ProjectLinks from "components/Project/ProjectLinks";

const PgronShop = () => {
  return (
    <MidWrapper>
      <S.ProjectWrapper>
        <S.ProjectBody>
          <S.ProjectImage src={HeaderImage} />
          <div>
            <ProjectTitle text={`PGRON SHOP`} />
            <h3>Sole Developer</h3>
            <S.ProjectHeaderText>{`PGRON SHOP is a lightweight serverside rendered webshop created with NextJs.`}</S.ProjectHeaderText>
            <ProjectLinks github={""} website={"https://pgronshop.netlify.app/"}/>
            <TechList>{pgronShopTech}</TechList>
            <S.ProjectText>
              <span>{`	For PGRON SHOP I wanted to create a very lightweight and fast webshop.
	Being used to working in REACT, Nextjs with server side rendering felt like the obvious choice.
	Knowing that the shop would only be updated once every other day, I knew that I could simply fetch all products on the backend during build time
	and render everything on the backend.
	For the shopping cart system I just saved the customers cart to a cookie that the customer would send to the backend, and the backend would respond with the respeective product data.`}</span>
              <span>{`For the payment system I implemented stripe checkout making sure to handle all payment details on the backend.`}</span>
            </S.ProjectText>
          </div>
          <S.ProjectText>{`With the mobile version of the site I wanted to create something that feelt like it was made for mobile, not just a "mobile version".`}</S.ProjectText>
          <S.ImageContainer>
            <S.ProjectHalfImage src={MainImageLeft} />
            <S.ProjectHalfImage src={MainImageRight} />
          </S.ImageContainer>
        </S.ProjectBody>
      </S.ProjectWrapper>
    </MidWrapper>
  );
};

export default PgronShop;
