import styled from 'styled-components';
import { flex } from '../../../../../styles/mixins';
export const Wrapper = styled.li`
    position:relative;
    & > ul{
        ${flex({align:'flex-start',justify:'center'})};
        background-color:${({theme}) => theme.colors.background};
        box-shadow:0 0 .5rem hsla(0,100%,0%,.16);
        border-radius:0 1rem 1rem 1rem;
        flex-flow:column;
        padding:.5rem 1.25rem .7rem;
        position:absolute;
        row-gap:1rem;
    }
    @media only screen{
        @media (max-width:700px){
            width:100%;
            & > ul{
                background-color:none;
                border-radius:0;
                box-shadow:0 0 .5rem hsla(0,100%,0%,0);
                position:relative;
                width:100%;
            }
        }
    }
`