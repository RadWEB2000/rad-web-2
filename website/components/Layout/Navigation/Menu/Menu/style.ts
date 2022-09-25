import styled from 'styled-components';
import { flex } from '../../../../../styles/mixins';
export const Wrapper = styled.menu`
    ${flex({align:'center',justify:'flex-end'})};
    gap:1rem;
    padding:0 .5rem;
    @media only screen {
        @media (max-width:900px){
            grid-column:1/-1;
            grid-row:2;
            justify-content:center;
            padding:0 .6rem .75rem;
        }
        @media (max-width:700px){
            align-items:flex-start;
            flex-flow:column;
        }
    }
`