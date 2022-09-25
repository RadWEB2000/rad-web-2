import 'styled-components';
declare module 'styled-components'{
    export interface DefaultTheme {
        colors:{
            background:string;
            backgroundOpacity:string;
            color:string;
            primary:string;
            secondary:string;
            tertiary:string;
            gray:string;
        },
        shadows:{
            blogCard:{
                hover:string;
                regular:string;
            };
        };
        fonts:{
            family:{
                code:string;
                regular:string;
            };
            weight:{
                heading:number;
                regular:number;
            }
        }
    }
}