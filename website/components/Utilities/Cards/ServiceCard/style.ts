import styled from 'styled-components';
import { flex } from '../../../../styles/mixins';
import { IntServiceCardCss } from './interface';
export const WrapperHome = styled.li`
    ${flex({align:'center',justify:'flex-start'})}
    flex-flow:column;
    max-width:95%;
    padding:1rem .8rem;
    row-gap:.25rem;
    width:70rem;
    & > div{
        width:100%;
        &,
        & > section,
        & > ul {
            ${flex({align:'flex-start',justify:'flex-start'})}
            flex-flow:column;
        }
        &.content{
            padding:.3rem 1rem;
            row-gap:1.5rem;
            & > section{
                row-gap:.8rem;
                & > h3 {
                    color:${({theme}) => theme.colors.color};
                    cursor:pointer;
                    font-size:3.4rem;
                    font-weight:600;
                    transition:.4s linear color;
                    &:hover{
                        color:${({theme}) => theme.colors.primary};
                    }
                }
                & > p {
                    color:${({theme}) => theme.colors.gray};
                    font-size:1.55rem;
                    line-height:1.5;
                }
            }
        }
        &.more{
            & > ul{
                row-gap:1rem;
                width:100%;
                & > li{
                    cursor:pointer;
                    justify-content:flex-start;
                    height:3rem;
                    &,
                    & > a,
                    & > span {
                        align-items:center;
                        display:flex;
                    }
                    & > a,
                    & > span{
                        justify-content:center;
                    }
                    & > a{
                        color:${({theme}) => theme.colors.color};
                        font-size:1.5rem;
                        padding:0 1rem;
                        transition:.2s linear color;
                    }
                    & > span{
                        color:${({theme}) => theme.colors.secondary};
                        font-size:3rem;
                        height:100%;
                        opacity:0;
                        transition:.2s .05s linear opacity, .2s .05s linear visibility;
                        visibility:hidden;
                        width:3rem;
                    }
                    &:hover{
                        & > a{
                            color:${({theme}) => theme.colors.secondary};
                        }
                        & > span{
                            opacity:1;
                            visibility:visible;
                        }
                    }
                }
            }
        }
    }
`