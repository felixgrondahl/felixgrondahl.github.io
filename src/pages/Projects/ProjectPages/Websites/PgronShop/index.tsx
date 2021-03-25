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
            <ProjectLinks github={""} website={"https://pgronshop.netlify.app/"} />
            <TechList>{pgronShopTech}</TechList>
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
            <S.ProjectHalfImage src={MainImageLeft} />
            <S.ProjectHalfImage src={MainImageRight} />
          </S.ImageContainer>
        </S.ProjectBody>
      </S.ProjectWrapper>
    </MidWrapper>
  );
};

export default PgronShop;
