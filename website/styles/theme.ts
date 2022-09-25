import { DefaultTheme } from "styled-components"

export const theme = {
    fonts:{
        family:{
            code:"'Fira Code', monospace",
            regular:"'Montserrat', sans-serif"
        },
        weight:{
            heading:700,
            regular:400
        }
    }
}
export const lightTheme:DefaultTheme = {
    colors:{
        background:'#fafafa',
        backgroundOpacity:`linear-gradient(to left,hsla(0, 0%, 98%, 0.8),hsla(0, 0%, 98%, 1))`,
        color:'#0a0a0a',
        primary:'#0c17e9',
        secondary:'#2345ff',
        tertiary:'#c92804',
        gray:'#7a7a7a'
    },
    shadows:{
        blogCard:{
            hover:'0 0 1.5rem hsla(0,100%,0%,.25)',
            regular:'0 0 1rem hsla(0,100%,0%,.15)'
        }
    },
    ...theme
}