import styled from "styled-components";
import { NavWrapper } from "components/Nav/style";

export const Wrapper = styled(NavWrapper)<{ display: boolean }>`
  flex-direction: column;
  width: 300px;
  display: ${(props) => (props.display ? "block" : "none")};
`;
