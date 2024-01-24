"use client"

import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import css from "views/HomeView/About/Carousel/Carousel.module.scss";
import { PersonCard } from "utils/Cards";
import { tImage } from "ts/types";
import { useEffect, useState } from "react";



type tCarousel = {
    cards : {
        button:string;
        content:string;
        image:tImage;
        title:string;
        uri:string;
        work:string;
    }[];
}

type tSlideButton = {
    direction:"left"|"right";
    icon:React.ReactNode;
    handle:() => void;

}

function SlideButton(props:tSlideButton){
    return (
         <button 
            className={css.cards__button}
            data-direction={props.direction}
            onClick={props.handle}
        >
            {props.icon}
        </button>
    )
}


export default function Carousel(props:tCarousel){
    const [currentSlide,setCurrentSlide] = useState<number>(0);
    
    useEffect(() => {
        console.log(currentSlide)


    },[currentSlide])

    return (
         <div  className={css.cards}>
                    <ul  className={css.cards__box}>
                        <PersonCard
                            button={props.cards[currentSlide].button}
                            content={props.cards[currentSlide].content}
                            image={props.cards[currentSlide].image}
                            theme="primary"
                            title={props.cards[currentSlide].title}
                            uri={props.cards[currentSlide].work}
                            work={props.cards[currentSlide].work}
                        />
                    </ul>
                    <div className={css.cards__buttons}>
                        <SlideButton
                            direction="left"
                            handle={() => {
                                currentSlide > 0 ?
                                setCurrentSlide(currentSlide - 1) :
                                setCurrentSlide(props.cards.length - 1)
                            }}
                            icon={<FaAnglesLeft/>}
                        />
                        <SlideButton
                            direction="right"
                            handle={() => {
                                currentSlide < props.cards.length - 1 ?
                                setCurrentSlide(currentSlide + 1) :
                                setCurrentSlide(0)
                            }}
                            icon={<FaAnglesRight/>}
                        />
                    </div>
                </div>
    )
}