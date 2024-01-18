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
    } & tHome
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
            <section className={css.primary__box} >
                <div className={css.primary__box__details} >
                    <h2 className={css.primary__box__details__title}  dangerouslySetInnerHTML={{__html:props.title}} />
                    <p className={css.primary__box__details__content}   dangerouslySetInnerHTML={{__html:props.content}} />
                    <LinkButton
                        label={props.button}
                        theme="primary"
                        uri={props.uri}
                    />
                </div>
                <div className={css.primary__box__image} >
                    <figure>
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
            </section>
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

export default function ServiceCard(props:tServiceCard){
    if(props.theme === "home"){
        return <Home {...props} />
    }
}