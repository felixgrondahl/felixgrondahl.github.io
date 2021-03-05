import styled from "styled-components";

export const ProfileImg = styled.div`
  width: 250px;
  height: 250px;
  background-size: cover;
  border-radius: 10px;
  margin: auto;
`;

export const TextWrapper = styled.div`
  width: 50%;
  margin: auto;

  h1 {
    font-size: 2.2rem;
    letter-spacing: 0.4em;
    text-align: center;
  }

  p {
    span {
      display: block;
      margin-bottom: 20px;
    }
  }
`;
