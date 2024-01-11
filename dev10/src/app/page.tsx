import { Hero } from "utils/Hero";
import {LinkButton} from "utils/Buttons";
import { home } from "data/example/home";

export default function HomePage(){
    return(
        <>
            <Hero
                {...home.hero}
                theme="home"
            />
           
        </>
    )
}