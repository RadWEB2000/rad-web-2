import styled, { css } from 'styled-components';
import {motion} from 'framer-motion';
import { flex } from '../../../../styles/mixins';
import { IntButttonCardCSS } from './interface';
export const Wrapper = styled(motion.button)<IntButttonCardCSS>`
    box-shadow:${({theme}) => theme.shadows.blogCard.regular};
    border-radius:5rem;
    transition:.2s linear box-shadow;
    &:focus,
    &:hover{
        box-shadow:${({theme}) => theme.shadows.blogCard.hover};
    }
    & > a ,
    & > p {
        ${flex({align:'center',justify:'center'})};
        color:${({theme}) => theme.colors.background};
        border-radius:5rem;
        font-size:2rem;
        height:4rem;
        min-width:12rem;
        transition:.2s linear background-color, .2s linear filter;
        ${({isPrimary}) => isPrimary && css ` 
            background-color:${({theme}) => theme.colors.primary};
            &:focus,
            &:hover{
                filter:brightness(120%);
            }
        `}
        ${({isSecondary}) => isSecondary && css ` 
            background-color:${({theme}) => theme.colors.secondary};
        `}
    }
`