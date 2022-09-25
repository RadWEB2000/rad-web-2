import styled from 'styled-components';
import { flex } from '../../../../../styles/mixins';
export const Wrapper = styled.section`
    margin:1rem auto;
    max-width:95%;
    width:120rem;
    & > p {
        font-size:1.77rem;
        line-height:1.7;
        font-weight:500;
        padding:.45rem;
        text-align:justify;
        a{
            color:${({theme}) => theme.colors.secondary};
            cursor:pointer;
            text-decoration:underline;
            transition:.2s linear color;
            &:focus,
            &:hover{
                color:${({theme}) => theme.colors.tertiary};
            }
        }
        blockquote{
            font-size:4rem;
            font-style:italic;
            font-weight:200;
            text-align:center;
        }
        ol,
        ul {
            ${flex({align:'flex-start',justify:'flex-start'})};
            flex-flow:column;
            margin:.35rem 0 .35rem 2rem;
            text-align:start;
            & > li{
                list-style-position:inside;
                h3,
                h4{
                    display:inline;
                    font-size:1.8rem;
                    font-weight:600;
                }
                p{
                    display:flex;
                }
            }
        }
        ol{
            & > li{
                list-style-type:decimal;
            }
        }
        ul{
            & > li{
                list-style-type: disc;
            }
        }

    }

    code{
        background-color:${({theme}) => theme.colors.color};
        border-radius:.5rem;
        color:${({theme}) => theme.colors.background};
        display:block;
        font-size:1.45rem;
        padding:1rem .15rem;
        white-space:pre-wrap;
        width:100%;
        word-break:break-all;
        word-wrap:break-word;
    }
`