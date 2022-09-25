import styled from 'styled-components';
import { flex } from '../../../../styles/mixins';
export const Wrapper = styled.div`
    & > ul{
        ${flex({align:'baseline',justify:'center'})};
        flex-flow:row wrap;
        gap:1rem;
        padding:.7rem .9rem;
    }
`