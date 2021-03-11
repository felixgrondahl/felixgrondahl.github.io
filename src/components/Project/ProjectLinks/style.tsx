import styled from "styled-components";

export const LinkWrapper = styled.div`
  height: 35px;

  a:nth-child(2) {
    margin-left: 40px;
  }

  a {
    line-height: 35px;
    color: white;
    letter-spacing: 0.15rem;
    text-decoration: none;
    font-weight: 300;
  }
  a:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  svg {
    vertical-align: middle;
    margin-right: 5px;
  }
`;
