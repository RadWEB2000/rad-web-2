import styled from 'styled-components';
export const Wrapper = styled.nav`
    background-color:${({theme}) =>theme.colors.background};
    box-shadow:0 0 1rem hsla(0,100%,0%,.35);
    display:grid;
    grid-template-columns:1fr 3fr;
    position:sticky;
    grid-template-rows:7.5rem auto;
    top:0;
    transition:.5s linear box-shadow;
    z-index:9999;
    @media only screen {
        @media (max-width:900px){
            grid-template-columns:1fr 15rem;
            grid-template-rows:6rem auto;
        }
        @media (max-width:450px){
            grid-template-columns:1.5fr 1fr;
            grid-template-rows:5rem auto;
        }
    }
`
