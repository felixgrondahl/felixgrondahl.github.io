import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  position: relative;
  text-align: center;
  top: calc(50% - 56px / 2 - 75px);
  left: 50%;
  transform: translate(-50%, -50%);

  span {
    letter-spacing: 0.12em;
    font-size: 1rem;
    font-weight: 300;
    display: block;
  }
`;

// export const Subtitle = styled.span``;
