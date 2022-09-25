import styled from 'styled-components';
import { flex } from '../../../../styles/mixins';
export const Wrapper = styled.ul`
    ${flex({align:'center',justify:'flex-start'})};
    flex-flow:row wrap;
    gap:1.25rem;
    & > li {
        color:${({theme}) => theme.colors.gray};
        flex-flow:column;
        & > span{
            ${flex({align:'center',justify:'center'})};
            aspect-ratio:1/1;
            margin:0 auto;
            width:4rem;
        }
        & > p{
            font-size:1.25rem;
            font-weight:800;
        }
    }
`