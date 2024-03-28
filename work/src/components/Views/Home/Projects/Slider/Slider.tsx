"use client"
import css from  "v/home/Projects/Slider/Slider.module.scss";
import { tSlider, tSliderButton } from "v/home/Projects/Slider/Slider.models";
import { LiaAngleDoubleRightSolid as RightIcon, LiaAngleDoubleLeftSolid as LeftIcon } from "react-icons/lia";
import { PrimaryProjectCard as ProjectCard } from "utils/Cards";
import { useCallback, useState } from "react";
import {motion} from "framer-motion";
import dynamic from 'next/dynamic';

// const ProjectCard = dynamic(() => import("utils/Cards").then((mod) => mod.PrimaryProjectCard) ,{
//     ssr:false,
//     loading:() => <p>Loading....</p>
// })

function SliderButton({handle,icon}:tSliderButton){
    return (
        <button className={css.button} onClick={handle}>
            {icon}
        </button>
    )
}

export default function Slider({button,cards}:tSlider){
    const [index, setIndex] = useState({
        start:0,
        end:1
    })

    const [slideDirection, setSlideDirection] = useState<"left"|"right">("left")

    const nextCard = useCallback(() => {
        setIndex(prevIndex => {
            const newIndexEnd = prevIndex.end + 1;
            return newIndexEnd <= cards.length ? { start: prevIndex.start + 1, end: newIndexEnd } : { start: 0, end: 1 };
        });
        setSlideDirection("right");
    }, [cards.length]);
    
    const prevCard = useCallback(() => {
        setIndex(prevIndex => {
            const newIndexStart = prevIndex.start - 1;
            return newIndexStart >= 0 ? { start: newIndexStart, end: prevIndex.end - 1 } : { start: cards.length - 1, end: cards.length };
        });
        setSlideDirection("left");
    }, [cards.length]);
    return (
    <div className={css.wrapper} >
        <SliderButton
            handle={() => prevCard()}
            icon={<LeftIcon/>}
        />
        <motion.ul 
            className={css.cards} 
        >
            {cards.slice(index.start,index.end).map((item,index) => {
                return (
                    <ProjectCard
                        {...item}
                        button={button}
                        direction={slideDirection}
                        key={index}
                    />  
                )
            })}
        </motion.ul>
        <SliderButton
            handle={() => nextCard()}
            icon={<RightIcon/>}
        />
    </div>
   )
}