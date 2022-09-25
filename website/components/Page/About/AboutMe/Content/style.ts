import styled from 'styled-components';
import { flex } from '../../../../../styles/mixins';
export const Wrapper = styled.section`
    ${flex({align:'flex-start',justify:'center'})};
    flex-flow:column;
    row-gap:1rem;
    margin:1rem auto;
    max-width:95%;
    width:120rem;
    & > h2{
        font-size:4rem;
        font-weight:600;
    }
    & > p {
        font-size:1.7rem;
        line-height:1.8;
        padding:.7rem;
        text-align:justify;
    }
`