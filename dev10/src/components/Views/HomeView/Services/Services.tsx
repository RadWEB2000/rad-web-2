import { ServiceCard } from "utils/Cards";
import { tImage } from "ts/types";
import css from "views/HomeView/Services/Services.module.scss";

type tServices = {
    cards:{
        button:string;
        cards?:{
            image:tImage;
            title:string;
            uri:string;
        }[];
        content:string;
        image:tImage;
        title:string;
        uri:string;
    }[];
    title:string;
}

export default function Services(props:tServices){
    return (
        <div className={css.wrapper} >
            <section className={css.box} >
                <h2 className={css.title} 
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
            </section>
            <ul className={css.cards} >
                {props.cards.map((item,index) => {
                    return (
                        <ServiceCard {...item} key={index} theme="home" />
                    )
                })}
            </ul>
        </div>
    )    
}