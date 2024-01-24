"use client"
import { PersonCard } from "utils/Cards";
import { LinkButton } from "utils/Buttons";
import { tImage } from "ts/types";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import css from "views/HomeView/About/About.module.scss";
import {About_Carousel} from "views/HomeView";

type tAbout = {
    title:string;
    content:string;
    button: {
        label:string;
        uri:string;
    };
    cards : {
        button:string;
        content:string;
        image:tImage;
        title:string;
        uri:string;
        work:string;
    }[];
}

export default function About(props:tAbout){
    let indexCard = 0;
    return(
        <div className={css.wrapper}>
            <section className={css.box}>
                <h2 className={css.title} dangerouslySetInnerHTML={{__html:props.title}} />
                <p className={css.content} dangerouslySetInnerHTML={{__html:props.content}} />
                <LinkButton
                    theme="secondary"
                    filled
                    iconify
                    label={props.button.label}
                    uri={props.button.uri}
                    mode="light"
                />
            </section>
             {
                props.cards &&
                <About_Carousel
                    cards={props.cards}
                />
            }
        </div>  
    )
}