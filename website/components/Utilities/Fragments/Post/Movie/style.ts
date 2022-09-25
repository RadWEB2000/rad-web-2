import styled from "styled-components";
import { flex } from "../../../../../styles/mixins";
export const Wrapper = styled.figure`
  ${flex({ align: "center", justify: "center" })};
  margin: 2rem auto;
  max-width: 95%;
  width: 120rem;
  & > iframe {
    aspect-ratio: 16/9;
    max-width: 95%;
    width: 100rem;
  }
`;
