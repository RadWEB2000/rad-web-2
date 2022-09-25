import styled from 'styled-components';
import { flex } from '../../../../styles/mixins';
export const Wrapper = styled.div`
    padding:.5rem 1rem;
    & > ul{
        ${flex({align:'flex-start',justify:'center'})};
        flex-flow:row wrap;
        gap:1rem;
    }
`