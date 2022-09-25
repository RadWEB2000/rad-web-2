import styled from 'styled-components';
import { flex } from '../../../styles/mixins';
export const Wrapper = styled.div`
    ${flex({align:'start',justify:'center'})};
    flex-flow:row wrap;
    gap:1rem;
`