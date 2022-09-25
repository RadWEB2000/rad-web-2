import styled from 'styled-components';
import { flex, fullSize } from '../../../../../styles/mixins';
export const Wrapper = styled.header`
    display:grid; 
    gap:.25rem;
    grid-template-columns:2fr 1.5fr;
    margin: 0 0 4rem 0;
    min-height:70rem;
    & > div{
        ${flex({align:'center',justify:'center'})}
        &.image{
            & > figure{
                ${fullSize};
                position:relative;
                width:100%;
            }
        }
        &.content{
            position:relative;
            & > section{
                ${flex({align:'flex-start',justify:'center'})}
                flex-flow:column;
                position:sticky;
                row-gap:.7rem;
                top:15rem;
                & > h1 {
                    font-size:5.25rem;
                }
                & > h2{
                    color:${({theme}) => theme.colors.gray};
                    font-size:2.35rem;
                    font-weight:500;
                }
            }
        }
    }
    @media only screen{
        @media (max-width:1050px){
            & > div{
                &.content{
                    & > section{
                        & > h1 {
                            font-size:4.15rem;
                        }
                        & > h2{
                            font-size:1.85rem;
                        }       
                    }
                }
            }
        }
        @media (max-width:850px){
            grid-template-columns:1fr;
            & > div{
                &.image{
                    grid-row:2;
                    & > figure{
                        aspect-ratio:4/3;
                        height:auto;
                        width:90%;
                    }
                }
                &.content{
                    min-height:30rem;
                    grid-row:1;
                    padding:0 .5rem;
                }
            }
        }
        @media (max-width:700px){
            & > div{
                &.image{
                    & > figure{
                        aspect-ratio:4/3;
                        height:auto;
                        width:98%;
                    }
                }
                &.content{
                    min-height:30rem;
                    grid-row:1;
                    padding:0 .5rem;
                }
            }
        }
    }
`