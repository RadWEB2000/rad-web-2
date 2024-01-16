import Image from "next/image";
import Link from "next/link";
import { tImage } from "ts/types";
import css from "utils/Cards/ProjectCard/ProjectCard.module.scss";

type tProjectCardBase = {
    title:string;
    uri:string;
}

type tProjectCard = {

} & (
    {
        theme:"primary"
    } & tPrimary
)

type tPrimary = {
    categories:string[];
    content:string;
    image:tImage;
} & tProjectCardBase;

function Primary(props:tPrimary) {
    return(
        <Link className={css.primary__wrapper}  href={props.uri}>
            <div className={css.primary__details} >
                <h3 className={css.primary__title}  dangerouslySetInnerHTML={{__html:props.title}} />
                <ul className={css.primary__categories}>
                    {props.categories.map((item,index) => {
                        return(
                            <li
                                className={css.primary__categories__item}
                                dangerouslySetInnerHTML={{__html:item}}
                                key={index}
                            />
                        )
                    })}
                </ul>
            </div>
            <div  className={css.primary__image__box} >
                <figure className={css.primary__image} >
                    <Image
                        alt={props.image.altText}
                        fill
                        loading="lazy"
                        src={props.image.sourceUrl}
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        title={props.image.title}
                    />
                </figure>
            </div>
            <div className={css.primary__content__box} >
                <p className={css.primary__content} 
                    dangerouslySetInnerHTML={{__html:props.content.substring(0,120)+'...'}}
                />
            </div>
        </Link>
    )
}

export default function ProjectCard(props:tProjectCard){
    if(props.theme === "primary")   {
        return <Primary {...props} />
    }
}