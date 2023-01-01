import { createGlobalStyle } from "styled-components";
import { flex } from "./mixins";

export const Global = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    ::after,
    ::before{
        content:"";
        position:absolute;
    }
    a{
        cursor:pointer;
    }
    body{
        background-color:${({ theme }) => theme.colors.background};
        color:${({ theme }) => theme.colors.color};
        font-size:1.6rem;
        transition:.2s linear background-color, .2s linear color;
    }
    html{
        font-family:${({ theme }) => theme.fonts.family.regular};
        font-size:62.5%;
        font-weight:400;
    }
    a,
    button{
        cursor:pointer;
    }
    a{
        all:unset;
    }
    button{
        background:none;
        border:none;
        display:flex;
        font-family:inherit;
        font-weight:inherit;
        cursor:pointer;
        outline:none;
    }
    h1,
    h2{
        font-weight:${({ theme }) => theme.fonts.weight.heading};
    }
    code,
    pre{
        font-family:${({ theme }) => theme.fonts.family.code};
    }
    iframe{
        all:unset;
    }
    input,
    textarea {
        all:unset;
        font-family:inherit;
    }
    li,
    ol,
    ul{
        list-style:none;
    }
    main.page{
        /* background-color:#ddd; */
        margin:1rem auto 2rem;
        max-width:95%;
        width:160rem;
    }
    .section{
        ${flex({ align: "center", justify: "center" })};
        flex-flow:column;
        margin:5rem auto;
        row-gap:2rem;
        & > * {
            width:100%;
        }
    }
    main.contact{
        display:grid;
        grid-template-columns:1.85fr 2fr;
        width:95%;
        & > .cards {
            & > ul{
                display:grid;
                gap:.25rem;
                grid-template-columns:repeat(2,1fr);
            }
        }
        & > .form{
            width:100%;
        }
        @media only screen {
            @media (max-width:1250px){
                & > .cards {
                    & > ul{
                        grid-template-columns:repeat(1,1fr);
                        margin:0 auto;
                        max-width:95%;
                        width:40rem;
                    }
                }       
            }
            @media (max-width:1060px){
                display:flex;
                flex-flow:column-reverse;
                gap:8rem;
                grid-template-columns:1fr;
                & > .cards {
                    grid-row:2;
                    & > ul{
                        gap:1rem;
                        grid-template-columns:repeat(2,1fr);
                        margin:0 auto;
                        width:90%;
                    }
                }       
            }
            @media (max-width:650px){
                & > .form{
                    margin:0 auto;
                    width:99%;
                }
                & > .cards {
                    & > ul{
                        gap:1rem;
                        grid-template-columns:repeat(1,1fr);
                    }
                }       
            }
        }
    }

`;
