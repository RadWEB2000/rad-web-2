import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        box-sizing:border-box;
        margin: 0;
        padding: 0;
    }    

    ::after,
    ::before {
        content:"";
        position:absolute;
    }

    body {
        font-size: 1.6rem;
    }

    html {
        background-color: red;
        font-size: 62.5%;
    }
`;
