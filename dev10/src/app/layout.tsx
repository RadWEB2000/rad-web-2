import { q_settings } from "lib/configs/queries";
import { wordpress_api } from "lib/configs/wordpress";
import { iSettings } from "ts/interface";
import LayoutProvider from "context/LayoutContext";
import "css/Global.scss"
export const revalidate = 1;
type tRootLayout = {
    children:React.ReactNode;
}

export const metadata = {
    title: 'RadWEB',
};

export default async function RootLayout(props:tRootLayout){
    const settings:iSettings = await fetch(wordpress_api, {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            query:q_settings
        })
    }).then(res => res.json()).then(({data:{allSettings}}) => {
        return allSettings;
    })


    return(
        <html lang="pl">
            <head>
                <meta name="robots" content="noindex nofollow" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ubuntu+Mono&display=swap" rel="stylesheet"/>
            </head>
            <body>
                <LayoutProvider>
                    {props.children}
                </LayoutProvider>
            </body>
        </html>
    )
}