import styled from "styled-components";
import { NavWrapper } from "components/Nav/style";

export const Wrapper = styled(NavWrapper)<{ display: boolean }>`
  /* position: absolute; */
  /* transform: translateX(80vw); */
  /* right: 90px; */
  /* margin-left: 200px;
  flex-direction: column; */
  /* width: 200px; */
  /* height: 300px; */
  display: ${(props) => (props.display ? "flex" : "none")};
  padding-top: 20px;
  a {
    font-size: 1.3em;
    width: 150px;
    text-align: center;
  }
  /* text-align: let; */
  /* a {
    display: block;
    margin-bottom: 30px;
  } */

  /* @media (max-width: 1750px) {
    margin-left: 100px;
  } */
  /* @media (max-width: 1550px) { */
  /* display: block; */
  /* position: relative;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    width: 750px; */

  /* a {
      display: inline-block;
      margin-bottom: 30px;
    } */
  /* } */
`;
