"use client"

import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { tSlider } from "layout/HomePage/Projects/Slider/Slider.models";
import { PrimaryCard } from "cards/ProjectCards";

export default function Slider(props:tSlider){
    return(
         <div>
            <ul>
                <PrimaryCard
                    button={props.button}
                    excerpt={props.cards[0].excerpt}
                    featuredImage={props.cards[0].featuredImage}
                    page_project_article={props.cards[0].page_project_article}
                    title={props.cards[0].title}
                    uri={props.cards[0].uri}
                />
            </ul>
            <aside>
                <span/>
                <p>02</p>
                <div>
                    <button>
                        <HiOutlineChevronLeft/>
                    </button>
                    <button>
                        <HiOutlineChevronRight/>
                    </button>
                </div>
            </aside>
        </div>
    )
}