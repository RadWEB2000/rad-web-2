import styled from 'styled-components';
import { flex, fullSize } from '../../../../styles/mixins';
export const Wrapper = styled.ul`
    gap:2rem;
    flex-flow:row wrap;
    &,
    & > li ,
    & > li > a{
        ${flex({align:'center',justify:'center'})};
    }
    & > li {
        aspect-ratio:1/1;
        width:4rem;
        & > a {
            ${fullSize};
            cursor:pointer;
            font-size:2.5rem;
            transition:.2s linear color, .2s linear scale;
            &:hover{
                color:${({theme}) => theme.colors.secondary};
                scale:1.05;
            }
        }
    }
    @media only screen {
        @media (max-width:650px){
            & > li{
                width:3.5rem;
                & > a{
                    font-size:2.15rem;
                }
            }
        }
    }
`