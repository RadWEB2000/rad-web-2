import styled from 'styled-components';
import { flex, fullSize } from '../../../../../styles/mixins';
import { IntRodoCss } from './interface';
export const Wrapper = styled.div<IntRodoCss>`
    width:80%;
    & > input{
        display:none;
    }
    & > label{
        ${flex({align:'flex-start',justify:'center'})};
        cursor:pointer;
        flex-flow:column;
        padding:1rem;
        row-gap:1rem;
        user-select:none;
        & > div{
            ${flex({align:'center',justify:'center'})};
            background-color:${({theme}) => theme.colors.background};
            border:.2rem solid ${({theme}) => theme.colors.color};
            color:${({theme}) => theme.colors.color};
            font-size:1.32rem;
            min-height:2.2rem;
            min-width:2.2rem;
            transition:.15s linear color, .15s linear min-height, .15s linear min-width;
            & > span{
                ${flex({align:'center',justify:'center'})};
                ${fullSize};
            }
        }
        & > p {
            color:${({check,theme}) => check ? theme.colors.color : theme.colors.gray};
            font-size:1.3rem;
            line-height:1.1;
            text-align:justify;
            transition:.15s linear color;
            &:hover{
                color:${({theme}) => theme.colors.color};
            }
        }
    }
    @media only screen{
        @media (max-width:650px){
            width:95%;
        }
    }
`