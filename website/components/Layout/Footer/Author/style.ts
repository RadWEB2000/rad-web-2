import styled from 'styled-components';
import { flex } from '../../../../styles/mixins';
export const Wrapper = styled.p`
    ${flex({align:'center',justify:'center'})};
    cursor: default;
    font-size:2rem;
    font-weight:800;
    padding:2rem .5rem;
    user-select:none;
    @media only screen {
        @media (max-width:650px){
            font-size:1.8rem;
            font-weight:600;
            padding:1rem .5rem;
        }
    }
`