import Image from "next/image"
import { IntHero } from "./interface"
import { ReactElement } from 'react';
import { Page } from "./style";
type TypeHero = ReactElement|null;
export const Hero = ({content,title,type}:IntHero):TypeHero => {
    if(type === 'page'){
        return(
            <Page>
                <section>
                    <h1>{title}</h1>
                    <p dangerouslySetInnerHTML={{__html:content}} />
                </section>
            </Page>
        )
    } else {
        return null;
    }
}