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
  opacity: 0.85;

  svg {
    margin: 0 20px 20px 20px;

    @media ${device.tablet} {
      margin: 0 35px 20px 35px;
    }
  }
`;
