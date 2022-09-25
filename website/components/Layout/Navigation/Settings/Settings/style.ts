import styled from 'styled-components';
import { flex } from '../../../../../styles/mixins';
export const Wrapper = styled.div`
    ${flex({align:'center',justify:'flex-end'})};
    padding:0 1rem;
    height:100%;
    @media only screen {
        @media (max-width:900px){
            grid-column:2;
            grid-row:1;
        }
    }
`