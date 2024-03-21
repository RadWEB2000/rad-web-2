import Image from "next/image";
import Link from "next/link";
import { tPrimaryPersonCard } from "cards/PersonCards/PrimaryPersonCard/PrimaryPersonCard.models";
import css from "cards/PersonCards/PrimaryPersonCard/PrimaryPersonCard.module.scss";
import SecondaryButton from "buttons/SecondaryButton";

export default function PrimaryPersonCard({fullname,image,overview,works}:tPrimaryPersonCard){
    return (
        <li className={css.wrapper} >
            <figure  className={css.image__wrapper} >
                <picture
                     className={css.image} 
                >
                    <Image
                        alt={image.altText}
                        fill
                        loading="lazy"
                        src={image.sourceUrl}
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'top',
                        }}
                        title={image.title}
                        quality={80}
                    />
                </picture>
            </figure>
            <section className={css.container} >
                <h3  className={css.title}   dangerouslySetInnerHTML={{__html:fullname}} />
                <h4  className={css.works}   dangerouslySetInnerHTML={{__html:works}} />
                <span className={css.line}/>
                <p   className={css.overview}  dangerouslySetInnerHTML={{__html:overview.substring(0,75)}} />
                <SecondaryButton
                    rel="index follow"
                    target=""
                    title="więcej"
                    url="#"
                />
            </section>
        </li>
    )
}