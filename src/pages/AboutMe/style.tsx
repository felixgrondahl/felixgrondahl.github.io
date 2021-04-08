import styled from "styled-components";
import { device } from "globalStyles/breakpoints";
import { MidWrapper } from "globalStyles/wrappers";

export const AboutWrapper = styled(MidWrapper)`
  background: radial-gradient(100% 100% at 50% 0%, #373737 0%, #000000 100%);
`;

export const ContentWrapper = styled.div`
  width: 80%;
  margin: auto;

  @media ${device.tablet} {
    width: 90%;
  }
`;

export const MobileHeader = styled.h2`
  display: none;
  position: absolute;
  letter-spacing: 0.7em;
  font-weight: 400;
  width: 100%;
  text-align: center;
  padding-top: 70px;

  @media ${device.tablet} {
    display: initial;
  }
`;

export const ProfileImg = styled.div`
  width: 250px;
  height: 250px;
  background-size: cover;
  border-radius: 10px;

  @media ${device.tablet} {
    width: 130px;
    height: 130px;
  }
`;

export const TextWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 70px;
  padding-top: 30px;
  margin: auto;

  @media ${device.tablet} {
    width: 90%;
    flex-direction: column;
    gap: 20px;
  }

  p {
    line-height: 1.1em;
    letter-spacing: 0.11em;
    font-size: 1em;

    span {
      display: block;
    }

    span.textBlock {
      margin-bottom: 1em;
    }
  }
`;

export const SectionWrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255,255, 0.3);
  margin-bottom: 15px;
`;

export const Header = styled.header`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 100%;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.2rem;
    letter-spacing: 0.4em;
    text-align: center;
    margin: 0;

    @media ${device.tablet} {
      font-size: 1.3rem;
      font-weight: 400;
      margin: 5px 0;
    }
  }
`;

export const LeftColumn = styled.div`
  width: 60%;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const RightColumn = styled.div`
  width: 40%;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const Projects = styled.div`
`;

export const ListTitle = styled.p`
  font-weight: 400;
`;

export const Skills = styled.div`
  display: flex;
  justify-content: space-between;

  li p {
    margin: 0;
  }
`;

export const Concepts = styled.div``;

export const TextList = styled.ul`
  list-style-type: none;
  padding: 0;
`;
