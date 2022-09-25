import styled,{ css } from 'styled-components';
import { flex, fullSize } from '../../../../../styles/mixins';
const field = () => css`
    ${flex({align:'flex-start',justify:'center'})};
    flex-flow:column;
    row-gap:.15rem;
    position:relative;
    width:100%;
    & > * {
        width:100%;
    }
    & > label{
        ${flex({align:'center',justify:'flex-start'})};
        font-size:1.85rem;
        font-weight:600;
        height:3rem;
        padding:0 .45rem;
    }
    & > div{
        position:relative;
        & > input,
        & > textarea{
            ${fullSize};
            background-color:${({theme}) => theme.colors.background};
            color:${({theme}) => theme.colors.gray};
            font-weight:600;
            font-size:1.5rem;
            transition:.2s linear color;
            &:focus,
            &:hover{
                color:${({theme}) => theme.colors.color};
            }
        }
    }
`
export const Input = styled.div`
    ${field};
    & > div{
        padding:0 .15rem;
        & > span{
            background-color:${({theme}) => theme.colors.gray};
            bottom:0;
            height:.3rem;
            left:0;
            position:absolute;
            transition:.2s linear background-color;
            width:100%;
        }
        & > input {
            height:3.5rem;
            &:focus,
            &:hover{
                & + span{
                    background-color:${({theme}) => theme.colors.secondary};
                }
            }
        }
    }
`
export const Textarea = styled.div`
    ${field};
    & > div{
        border-radius:.25rem;
        outline:.2rem solid ${({theme}) => theme.colors.gray};
        padding:.25rem;
        transition:.2s linear outline;
        &:focus,
        &:hover{
            outline:.2rem solid ${({theme}) => theme.colors.secondary};
        }
        & > textarea {
            height:15rem;
            line-height:1.5;
            resize:none;
        }
    }
    @media only screen {
        @media (max-width:650px){
            & > div{
                padding:0;
            }
        }
    }
`
export const Button = styled.div`
    padding:.5rem 1rem;
    width:100%;
    &,
    & > button{
        ${flex({align:'center',justify:'center'})};
    }
    & > button{
        background-color:${({theme})=> theme.colors.color};
        color:${({theme}) => theme.colors.background};
        font-size:2rem;
        font-weight:700;
        height:4rem;
        width:15rem;
        transition:.2s linear background-color;
        &:enabled{
            &:focus,
            &:hover{
                background-color:${({theme})=> theme.colors.primary};
            }
        }
        &:disabled{
            background-color:${({theme})=> theme.colors.gray};
            cursor:default;
        }
    }
`