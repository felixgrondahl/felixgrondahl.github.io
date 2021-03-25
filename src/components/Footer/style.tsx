import styled from "styled-components";
import { device } from "globalStyles/breakpoints";

interface FooterProps {
  readonly mobileShow: boolean;
}

export const Wrapper = styled.footer<FooterProps>`
  width: 100%;
  margin: auto;
  position: absolute;
  bottom: 0;

  @media ${device.tablet} {
    display: ${props => props.mobileShow ? "none" : "initial"}
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;

  svg {
    margin: 0 40px 20px 40px;
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }

    @media ${device.tablet} {
      margin: 0 35px 20px 35px;
    }
  }
`;
