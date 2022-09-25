import styled from 'styled-components';
import { flex, fullSize } from '../../../../styles/mixins';
export const Wrapper = styled.header`
    display:grid;
    grid-template-columns:2fr 2.5fr;
    min-height:80vh;
    max-width:99%;
    margin:1rem auto 2rem;
    width:160rem;
    & > div{
        ${fullSize};
        &.content{
            padding:.75rem;
            row-gap:2rem;
            &,
            & > section{
                ${flex({align:'flex-start',justify:'center'})};
                flex-flow:column;
            }
            & > section{
                row-gap:1rem;
                & > * {
                    text-align:start;
                    width:100%;
                }
                & > h1{
                    font-size:7.5rem;
                    font-weight:700;
                }
                & > p {
                    color:${({theme}) => theme.colors.gray};
                    font-size:2.7rem;
                    line-height:1.7;
                    font-weight:600;
                }
            }
        }
        &.movie{
            ${flex({align:'center',justify:'center'})};
            & > svg{
                max-width:95%;
                width:70rem;
                .background{
                    fill:${({theme}) => theme.colors.secondary};
                    
                }
            }
        }
    }
    @media only screen {
        @media (max-width:1450px){
            grid-template-columns:1.75fr 2fr;
            padding:0 .7rem;
            & > div{
                &.content {
                    row-gap:1rem;
                    & > section{
                        row-gap:.25rem;
                        & > h1{
                            font-size:6.5rem;
                        }
                        & > p {
                            font-size:2.2rem;
                            line-height:1.7;
                        }
                    }
                }
                &.movie{
                    & > figure{
                        width:99%;
                    }
                }
            }
        }
        @media (max-width:1050px){
            grid-template-columns:1fr;
            & > div{
                &.content{
                    min-height:40rem;
                }
            }
        }
        @media (max-width:570px){
            & > div{
                &.content{
                    min-height:40rem;
                    padding:1.5rem;
                    & > section{
                        row-gap:1rem;
                        & > * {
                            text-align:start;
                            width:100%;
                        }
                        & > h1{
                            font-size:4.5rem;
                            font-weight:700;
                        }
                        & > p {
                            color:${({theme}) => theme.colors.gray};
                            font-size:1.85rem;
                            line-height:1.7;
                            font-weight:600;
                        }
                    }
                }
            }
        }
    }
`