import styled from 'styled-components';
import { flex } from '../../../../styles/mixins';
export const Wrapper = styled.footer`
    ${flex({align:'flex-start',justify:'flex-start'})};
    flex-flow:column;
    padding:2rem 0 0;
    & > * {
        width:100%;
    }
    & > .info{
        display:grid;
        grid-template-columns:2fr 1fr;
    }
    @media only screen {
        @media (max-width:1050px){
            & > .info{
                ${flex({align:'flex-start',justify:'flex-start'})};
                flex-flow:column-reverse;
                gap:2rem;
                & > * {
                    width:100%;
                }
            }       
        }
    }
`