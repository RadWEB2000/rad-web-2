import styled from 'styled-components';
import { fullSize } from '../../../../styles/mixins';
export const Wrapper = styled.div`
    aspect-ratio:16/10;
    overflow:hidden;
    margin:3rem auto;
    max-height:80rem;
    min-height:45rem;
    width:100%;
    & > figure{
        ${fullSize}
        position:relative;
        & > * {
            ${fullSize}
            object-fit:cover;
            object-position:center;
        }
    }
`