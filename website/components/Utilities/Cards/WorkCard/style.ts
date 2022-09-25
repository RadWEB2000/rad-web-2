import styled from 'styled-components';
import { flex } from '../../../../styles/mixins';
export const Wrapper = styled.li`
    flex-shrink:0;
    max-width:90%;
    padding:1.1rem;
    width:50rem;
    &,
    & > * {
        ${flex({align:'flex-start',justify:'center'})};
        flex-flow:column;
        text-align:center;
        row-gap:.7rem;
    }
    & > * {
        &,
        & > * {
            width:100%;
        }
        & > h3{
            color:${({theme}) => theme.colors.primary};
            font-size:2.25rem;
        }
        & > p {
            &.content{
                font-size:1.62rem;
                font-weight:300;
            }
            &.time,
            &.position{
                color:${({theme}) => theme.colors.secondary};
                font-size:1.55rem;
            }
        }
    }
`