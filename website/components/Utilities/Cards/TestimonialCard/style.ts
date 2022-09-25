import styled from 'styled-components';
import { flex } from '../../../../styles/mixins';
export const Wrapper = styled.div`
    background-color:${({theme}) => theme.colors.background};
    border-radius:1rem;
    margin:4rem auto;
    max-width:90%;
    position:relative;
    padding:.35rem .45rem;
    user-select:none;
    width:70rem;
    & > section{
        & > p {
            color:${({theme}) => theme.colors.primary};
            font-size:2.5rem;
            font-weight:400;
            padding:.55rem .75rem;
            text-align:center;
        }
    }
    & > div{
        ${flex({align:'center',justify:'flex-start'})};
        flex-flow:row wrap;
        gap:1rem;
        padding:.25rem .55rem;
        & > figure{
            aspect-ratio:1/1;
            border-radius:50%;
            overflow:hidden;
            position:relative;
            width:5rem;
        }
        & > div{
            & > h3{
                color:${({theme}) => theme.colors.secondary};
                font-size:1.7rem;
            }
            & > p{
                color:${({theme}) => theme.colors.gray};
            }
        }
    }
    @media only screen {
        @media (max-width:550px){
            & > section{
                & > p {
                    font-size:2.15rem;
                    padding:.55rem .75rem;
                }
            }
        }
    }
`