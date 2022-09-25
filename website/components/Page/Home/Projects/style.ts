import styled from 'styled-components';
import { flex } from '../../../../styles/mixins';
export const Wrapper = styled.div`
    & > ul{
        ${flex({align:'center',justify:'space-around'})};
        flex-flow:row wrap;
        padding:.25rem .35rem;
    }
`