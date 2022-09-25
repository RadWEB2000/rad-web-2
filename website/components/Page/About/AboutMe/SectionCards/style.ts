import styled from 'styled-components';
import { flex } from '../../../../../styles/mixins';
export const Wrapper = styled.section`
    ${flex({align:'flex-start',justify:'center'})};
    flex-flow:column;
    margin:1rem auto;
    max-width:95%;
    width:120rem;
    & > h2{
        font-size:3rem;
        padding:.25rem .5rem;
    }
    & > div{
        overflow-x:scroll;
        width:100%;
        &::-webkit-scrollbar{
            height:0;
        }
        & > ul{
            ${flex({align:'center',justify:'flex-start'})};
            min-height:15rem;
            width:100%;
        }
    }   
    @media only screen {
        @media (max-width:850px){
            & > h2{
                font-size:2rem;
            }
        }
    }
`