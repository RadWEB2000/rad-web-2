import { flex } from './../../../../styles/mixins';
import styled from 'styled-components';
export const Wrapper = styled.div`
    ${flex({align:'center',justify:'flex-start'})};
    padding:0 1rem;
    & > a {
        cursor:pointer;
        font-size:3.15rem;
        font-weight:600;
        user-select:none;
    }
    @media only screen {
        @media (max-width:900px){
            grid-column:1;
            grid-row:1;
        }
        @media (max-width:450px){
            & > a {
                font-size:2.7rem;
            }       
        }
    }
`