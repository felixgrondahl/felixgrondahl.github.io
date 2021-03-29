import styled from "styled-components";
import { device } from "globalStyles/breakpoints";

export const LinkWrapper = styled.div`
  line-height: 35px;
  width: fit-content;

  @media ${device.laptopL} {
    line-height: 25px;
  }

  a:nth-child(2) {
    margin-left: 40px;
  }

  a {
    color: white;
    letter-spacing: 0.15rem;
    text-decoration: none;
    font-weight: 300;

    @media ${device.laptopL} {
      font-size: 0.9em;
    }

    @media ${device.mobileM} {
      letter-spacing: 0.05rem;
    }
  }
  a:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  svg {
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    @media ${device.mobileM} {
      display: none;
    }
  }
`;
