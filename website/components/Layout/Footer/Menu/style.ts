import styled from 'styled-components';
import { flex } from '../../../../styles/mixins';
export const ElementWrapper =  styled.li`
    ${flex({align:'center',justify:'flex-start'})};
    color:${({theme}) => theme.colors.color};
    cursor:pointer;
    font-size:1.65rem;
    font-weight:600;
    padding:0 .25rem;
    transition:.2s linear color;
    &:hover{
        color:${({theme}) => theme.colors.primary};
    }
    @media only screen {
        @media (max-width:650px){
            font-size:1.45rem;
            font-weight:500;
        }
    }
`
export const MenuWrapper = styled.menu`
    display:grid;
    gap:1.25rem;
    grid-template-columns:repeat(3,1fr);
    padding:2rem 1rem;
    @media only screen {
        @media (max-width:550px){
            grid-template-columns:repeat(2,1fr);
        }
    }
`