import styled from 'styled-components';
import { flex } from '../../../../styles/mixins';
export const Wrapper = styled.div`
    display:grid;
    grid-template-columns:2fr 1fr;
    margin: 7rem auto;
    max-width: 95%;
    row-gap: 1rem;
    width: 120rem;
    & > div{
        ${flex({ align: "center", justify: "center" })}; 
        & > figure{
            aspect-ratio:1/1;
            border-radius:50%;
            overflow:hidden;
            position:relative;
            width:20rem;
        }
    }   
    & > section{
        ${flex({ align: "center", justify: "center" })}; 
        flex-flow:column;
        text-align:center;
        & > h2{
            color:${({theme}) => theme.colors.color};
            cursor:pointer;
            font-size:3rem;
            transition:.2s linear color;
            &:hover{
                color:${({theme}) => theme.colors.primary};
            }
        }
        & > p{
            font-size:1.5rem;
        }
    }
    @media only screen {
        @media (max-width:690px){
            ${flex({ align: "center", justify: "center" })}; 
            display:flex;
            flex-flow:column-reverse;
        }
    }
`