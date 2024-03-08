import Image from "next/image";
import {tProjects} from "layout/HomePage/Projects/Projects.models";
import { PrimaryButton } from "utils/Buttons";
import css from "layout/HomePage/Projects/Projects.module.scss"
import  Slider  from "layout/HomePage/Projects/Slider";

export default function Projects(props:tProjects){
    return (
        <>
            <div className={css.head}>
                <figure className={css.head__image}>
                    <Image
                        alt={props.image.altText}
                        fill
                        loading="lazy"
                        src={props.image.sourceUrl}
                        style={{
                            objectFit:"cover",
                            objectPosition:"center"
                        }}
                        title={props.image.title}
                        quality={50}
                    />
                </figure>
                <section className={css.head__box}>
                    <h2 className={css.head__box__title}>{props.title}</h2>
                    <PrimaryButton
                        href={props.button.url}
                        label={props.button.title}
                        rel="index follow"
                        target={props.button.target}
                        theme="dark"
                    />
                    <p
                        className={css.head__box__content}
                        dangerouslySetInnerHTML={{__html:props.content}}
                    />
                </section>
            </div>
           <Slider
                cards={props.slider.cards}
                button={props.slider.button}
           />
        </>
    )
}