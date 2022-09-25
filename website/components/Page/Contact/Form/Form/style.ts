import styled from 'styled-components';
import { flex } from '../../../../../styles/mixins';
export const Wrapper = styled.form`
    gap:2rem;
    max-width:100%;
    &,
    & > .fields{
        ${flex({align:'center',justify:'center'})};
        flex-flow:column;
    }
    & > .fields{
        gap:1rem;
        max-width:92%;
        width:60rem;
        & > .double,
        & > .single {
            width:100%;
        }
        & > .double{
            display:grid;
            gap:1rem;
            grid-template-columns:repeat(2,1fr);
        }
    }
    @media only screen {
        @media (max-width:650px){
            & > .fields{
                & > .double{
                    grid-template-columns:repeat(1,1fr);
                }
            }       
        }
    }
`