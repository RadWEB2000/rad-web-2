import styled from 'styled-components';
import { flex, fullSize } from '../../../../styles/mixins';
export const Wrapper = styled.li`
    max-width:95%;
    width:50rem;
    & > figure {
        aspect-ratio:16/10;
        overflow:hidden;
        width:100%;
        &,
        & > div{
            position:relative;
        }
        & > div{
            ${fullSize};
            transition:.15s linear transform;
        }
    }
    & > section{
        ${flex({align:'flex-start',justify:'flex-start'})};
        flex-flow:column;
        padding:.5rem .8rem;
        row-gap:.8rem;
        & > h2{
            font-size:2.85rem;
        }
        & > p {
            color:${({theme}) => theme.colors.gray};
            font-size:1.45rem;
        }
        & > button{
            & > a{
                min-height: 3.7rem;
                padding: 0 0.85rem;
                min-width:10rem;
            }
        }
    }
    &:hover{
        & > figure{
            & > div{
                transform:scale(1.15);
            }
        }
    }
`