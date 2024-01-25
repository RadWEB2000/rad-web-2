import { tImage } from "ts/types";
import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "utils/Buttons";
import css from "utils/Cards/ServiceCard/ServiceCard.module.scss"

type tServiceCardBase = {
    title:string;
    uri:string;
}

type tServiceCard = {} & (
    {
        theme:"home"
    } & tHome | 
    {
        theme: "offer"
    } & tOffer
)

type tHome = {
    button:string;
    cards?:tHomeTile[];
    content:string;
    image:tImage;
} & tServiceCardBase

type tHomeTile = {
    image:tImage;
} & tServiceCardBase

type tOffer = {
    image:tImage;
    title:string;
    content:string;
    button:{
        label:string;
        uri:string;
    }
}

function HomeTile(props:tHomeTile) {
    return(
        <Link className={css.primary__card__wrapper} href={props.uri}>
            <figure className={css.primary__card__image} >
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
            <h3 className={css.primary__card__title}  dangerouslySetInnerHTML={{__html:props.title}} />
        </Link>
    )
}

function Home(props:tHome){
    return(
        <li className={css.primary__wrapper} >
            <div className={css.primary__box__details} >
                <h2 className={css.primary__box__details__title}  dangerouslySetInnerHTML={{__html:props.title}} />
                <p className={css.primary__box__details__content}   dangerouslySetInnerHTML={{__html:props.content}} />
                <LinkButton
                    label={props.button}
                    theme="primary"
                    uri={props.uri}
                />
            </div>
            <div className={css.primary__image__box} >
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
            {
                props.cards &&
                <ul className={css.primary__cards} >
                    {props.cards.map((item,index) => {
                        return <HomeTile {...item} key={index} />
                    })}
                </ul>
            }
        </li>
    )
}


function Offer(props:tOffer){
    return(
        <li className={css.secondary__wrapper}>
            <figure className={css.secondary__image}>
                 <Image
                    alt={props.image.altText}
                    fill
                    loading="lazy"
                    src={props.image.sourceUrl}
                    style={{
                        objectFit: 'contain',
                        objectPosition: 'center',
                    }}
                    title={props.image.title}
                />
            </figure>
            <h3 className={css.secondary__title} dangerouslySetInnerHTML={{__html:props.title}} />
            <p className={css.secondary__content} dangerouslySetInnerHTML={{__html: props.content.length >= 125 ? props.content.substring(0,125)+'...' : props.content}} />
            <LinkButton
                label={props.button.label}
                uri={props.button.uri}
                theme="primary"
            />
        </li>
    )
}

export default function ServiceCard(props:tServiceCard){
    if(props.theme === "home"){
        return <Home {...props} />
    }else if(props.theme === "offer"){
        return <Offer {...props} />
    }
}