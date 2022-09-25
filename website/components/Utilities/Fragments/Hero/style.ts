import styled from "styled-components";
import { flex } from "../../../../styles/mixins";
export const Page = styled.header`
  & > section{
    ${flex({align:'flex-start',justify:'center'})}
    flex-flow:column;
    margin:2rem auto 6rem;
    max-width:95%;
    min-height:50rem;
    row-gap:2rem;
    text-align:start;
    width:120rem;
    & > * {
      word-wrap:break-word;
    }
    & > h1{
      font-size:8rem;
    }
    & > p {
      font-size:2rem;
      line-height:1.7;
    }
  }
  @media only screen {
    @media (max-width:1100px){
      & > section{
        & > h1{
          font-size:5rem;
        }
      }
    }
  }
`;
