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
    } & tPrimary | 
    {
        theme:"secondary"
    } & tSecondary
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
                    dangerouslySetInnerHTML={{__html: props.content.length >= 145 ? props.content.substring(0,145)+'...' : props.content}}
                />
            </div>
        </Link>
    )
}

type tSecondary = {
    image:tImage;
    title:string;
    categories:string[];
    uri:string;
}

function Secondary(props:tSecondary){
    return(
        <Link className={css.secondary__wrapper} href={props.uri}>
            <figure className={css.secondary__image} >
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
            <h3
                className={css.secondary__title} 
                dangerouslySetInnerHTML={{__html:props.title}}
            />
            <ul
                className={css.secondary__categories} 
            >
                {props.categories.map((item,index) => {
                    return(
                        <li
                            className={css.secondary__category} 
                            dangerouslySetInnerHTML={{__html:item}}
                            key={index}
                        />
                    )
                })}
            </ul>
        </Link>
    )
}

export default function ProjectCard(props:tProjectCard){
    if(props.theme === "primary")   {
        return <Primary {...props} />
    }else if(props.theme === "secondary"){
        return <Secondary {...props} />
    }
}