import styled, { css } from 'styled-components';
import { flex } from '../../../../../styles/mixins';
import { IntMenuButton } from './interface';
export const Wrapper = styled.button<IntMenuButton>`
    ${flex({align:'center',justify:'space-around'})};
    aspect-ratio:1/1;
    flex-flow:column;
    overflow:hidden;
    position:relative;
    width:3.5rem;
    & > span{
        background-color:${({theme}) => theme.colors.primary};
        height:.3rem;
        transition:.2s linear background-color, .2s linear transform;
        width:100%;
    }
    ${({isOpen}) => isOpen && css`
        & > span{
            left:50%;
            position:absolute;
            top:50%;
            &:first-of-type{
                transform:translate(-50%,-50%) rotate(45deg);
            }
            &:last-of-type{
                transform:translate(-50%,-50%) rotate(-45deg);
            }
            &:nth-of-type(2){
                display:none;
            }
        }
    `}
`