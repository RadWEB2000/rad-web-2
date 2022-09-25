import styled from "styled-components";
import { flex } from "../../../../../styles/mixins";
export const Wrapper = styled.header`
  ${flex({ align: "flex-start", justify: "flex-start" })};
  flex-flow: column;
  margin: 1rem auto 2rem;
  max-width: 95%;
  row-gap: 1rem;
  width: 120rem;
  & > figure {
    height: 65rem;
    position: relative;
    width: 100%;
  }
  & > h1 {
    font-size: 6rem;
    padding: 0 0.45rem;
    width: 100%;
  }
  & > .excerpt {
    font-size: 1.9rem;
    font-weight: 700;
    line-height: 1.9;
    padding: 0.5rem 0.1rem;
    text-align: justify;
  }
  & > .release {
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 1.3;
    padding: 0 0.45rem;
  }
  @media only screen {
    @media (max-width: 550px) {
      & > h1 {
        font-size: 3.75rem;
        word-break:break-all;
        word-wrap:break-word;
      }
    }
  }
`;


