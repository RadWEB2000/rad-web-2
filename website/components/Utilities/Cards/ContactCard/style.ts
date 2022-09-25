import styled from 'styled-components';
import { flex, fullSize } from '../../../../styles/mixins';
export const Wrapper = styled.li`
    display:grid;
    grid-template-columns:2fr 2.5fr;
    gap:.35rem;
    max-width:90%;
    width:58rem;
    & > div{
        ${fullSize};
        position:relative;
        & > figure{
            aspect-ratio:1/1;
            border-radius:50%;
            overflow:hidden;
            position:relative;
            width:100%;
        }
    }
    & > section{
        ${flex({align:'flex-start',justify:'center'})};
        flex-flow:column;
        padding:.2rem .8rem;
        row-gap:.5rem;
        width:100%;
        & > h3,
        & > li > a{
            word-wrap:break-word;
            word-break:break-all;
        }
        & > li{
            & > a{
                color:${({theme}) => theme.colors.gray};
                cursor:pointer;
                transition:.15s linear color;
                &:focus,
                &:hover{
                    color:${({theme}) => theme.colors.secondary};
                }
            }
        }
    }
    @media only screen {
        @media (max-width:590px){
            ${flex({align:'flex-start',justify:'center'})};
            flex-flow:column;
            width:40rem;
            & > div{

            }
            & > section{
                align-items:center;
                min-height:14rem;
                padding:.2rem .4rem;
                text-align:center;
            }
        }
    }
`