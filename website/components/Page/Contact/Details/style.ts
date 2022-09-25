import styled from 'styled-components';
import { flex, fullSize } from '../../../../styles/mixins';
export const Wrapper = styled.li`
    &,
    & > *{
        ${flex({align:'flex-start',justify:'center'})};
        flex-flow:column;
    }
    & > * {
        width:100%;
    }
    & > .details{
        padding:.2rem .25rem 1rem;
        & > h2{
            color:${({theme}) => theme.colors.secondary};
            font-size:2rem;
        }
        & > p{
            font-size:1.35rem;
            color:${({theme}) => theme.colors.gray};
            b{
                color:${({theme}) => theme.colors.color};
            }
        }
        & > a{
            font-weight:500;
            font-size:1.45rem;
            word-break:break-all;
            word-wrap:break-word;
        }
    }
    & > .map{
        aspect-ratio:16/10;
        position:relative;
        & > iframe{
            ${fullSize};
            object-fit:cover;
            object-position:center;
            width:100%;
        }
    }
`