import styled from "styled-components";
import { device } from "globalStyles/breakpoints";

export const Wrapper = styled.div`
  width: fit-content;
  height: 35px;
  background: linear-gradient(90deg, #404040 0%, rgba(131, 131, 131, 0.58) 75.34%, #393939 100%);
  border-radius: 10px;
  display: flex;
  flex-wrap: none;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  margin: 2px 0;

  svg {
    margin-right: 11px;

    @media ${device.laptopL} {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }

    @media ${device.mobileM} {
      margin-right: 2px;
      width: 15px;
      height: 15px;
    }
  }

  @media ${device.laptopL} {
    padding: 0 5px;
  }

  @media ${device.mobileM} {
    height: 25px;
    border-radius: 5px;
  }
`;

export const Websites = styled.div`
  display: inherit;
`;

export const Icons = styled.div`
  display: inherit;
`;
