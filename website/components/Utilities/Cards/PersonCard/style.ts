import styled from 'styled-components';
import { flex } from '../../../../styles/mixins';
export const Wrapper = styled.div`
    column-gap:1rem;
    display:grid;
    grid-template-columns:2.5fr 1.5fr;
    min-height:70rem;
    & > figure{
        border-radius:2.7rem;
        overflow:hidden;
        position:relative;
    }
    & > section{
        ${flex({align:'flex-start',justify:'center'})}
        flex-flow:column;
        padding:.7rem;
        row-gap:2rem;
        & > h2{
            font-size:4rem;
        }
        & > p {
            color:${({theme}) => theme.colors.gray};
            font-size:1.65rem;
            line-height:1.5;
        }
        & > ul{
            ${flex({align:'flex-start',justify:'flex-start'})}
            flex-flow:row wrap;
            padding:.25rem;
            gap:.4rem;
            & > button {
                & > a{
                    min-height:3.5rem;
                    padding:.15rem .2rem;
                    & > p{
                        font-size:1.5rem;
                    }
                }
            }
        }
    }
    @media only screen{
        @media (max-width:1250px){
            grid-template-columns:2fr 1.5fr;
        }
        @media (max-width:950px){
            grid-template-columns:1.5fr 2fr;
            & > section{
                & > h2{
                    font-size:3.45rem;
                }
                & > p {
                    font-size:1.55rem;
                    line-height:1.3;
                }
            }
        }
        @media (max-width:850px){
            grid-template-columns:1fr;
            min-height:auto;
            & > figure{
                aspect-ratio:4/3;
            }
        }
        @media (max-width:450px){
            grid-template-columns:1fr;
            min-height:auto;
            & > figure{
                min-height:45rem;
                width:100%;
            }
            & > section{
                & > h2{
                    font-size:3rem;
                }
                & > p {
                    font-size:1.45rem;
                    line-height:1.3;
                }
            }
        }
    }
`