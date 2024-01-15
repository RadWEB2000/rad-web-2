import Image from "next/image";
import Link from "next/link";
import { tImage } from "ts/types"
import { LinkButton } from "utils/Buttons"
import css from "utils/Cards/PersonCard/PersonCard.module.scss";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

type tPersonCardBase = {
    image:tImage;
    title:string;
    work:string;
    uri:string;
}

type tPersonCard = {

} & (
    {
        theme:"primary"
    } & tPrimary | {
        theme:"secondary"
    } & tSecondary
)

type tPrimary = {
    button:string;
    content:string;
    
}& tPersonCardBase;

type tSecondary = {
} & tPersonCardBase;

function Primary(props:tPrimary){
    return(
        <li className={css.primary__wrapper} >
            <div className={css.primary__image__wrapper} >
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
            <section className={css.primary__container} >
                <h3  className={css.primary__title} dangerouslySetInnerHTML={{__html:props.title}} />
                <h5  className={css.primary__work} dangerouslySetInnerHTML={{__html:props.work}}  />
                <p  className={css.primary__content}  dangerouslySetInnerHTML={{__html:props.content}}  />
                <LinkButton
                    label={props.button}
                    uri={props.uri}
                    theme="primary"
                />
            </section>
        </li>
    )
}



function Secondary(props:tSecondary){
    return(
        <li className={css.secondary__wrapper} >
            <Link className={css.secondary__box}  href={props.uri}>
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
                <section className={css.secondary__content} >
                    <h3 className={css.secondary__title}  dangerouslySetInnerHTML={{__html:props.title}} />
                    <p className={css.secondary__work}  dangerouslySetInnerHTML={{__html:props.work}} />
                </section>
            </Link>
        </li>
    )
}


export default function PersonCard(props:tPersonCard){
    if(props.theme === "primary"){
        return <Primary {...props} />
    }else if(props.theme === "secondary"){
        return <Secondary {...props} />
    }
}