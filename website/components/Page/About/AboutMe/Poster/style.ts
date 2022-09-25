import styled from 'styled-components';
import { flex } from '../../../../../styles/mixins';
import { IntPosterCss } from './interface';
export const Wrapper = styled.div<IntPosterCss>`
    ${flex({align:'center',justify:'center'})};
    margin:1.5rem auto;
    width:100%;
    &,
    & > figure{
        position:relative;
    }
    & > figure{
        aspect-ratio:${({ratio}) => ratio};
        max-width:90%;
        width:80rem;
    }
`