import styled from 'styled-components';
import { flex } from '../../../../styles/mixins';
export const Wrapper = styled.ul`
    ${flex({align:'baseline',justify:'space-evenly'})};
    flex-flow:row wrap;
    gap:1rem;
    padding:.5rem .25rem;
`