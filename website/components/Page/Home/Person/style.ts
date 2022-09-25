import styled from "styled-components";
import { flex, fullSize } from "../../../../styles/mixins";
export const Wrapper = styled.div`
    ${flex({ align: "flex-start", justify: "center" })};
    flex-flow:column;
    margin:3rem auto;
    row-gap:1rem;
    & > h2 {
        color:${({ theme }) => theme.colors.color};
        font-size:7rem;
    }
    & > *{
        width:100%;
    }
    @media only screen {
        @media (max-width:500px){
            & > h2 {
                font-size:5rem;
            }
        }
    }
`;
