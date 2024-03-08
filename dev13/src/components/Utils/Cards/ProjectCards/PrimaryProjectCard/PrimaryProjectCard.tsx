import Image from "next/image";
import { tPrimaryProjectCard } from "cards/ProjectCards/PrimaryProjectCard/PrimaryProjectCard.models";
import css from "cards/ProjectCards/PrimaryProjectCard/PrimaryProjectCard.module.scss"

export default function PrimaryProjectCard(props:tPrimaryProjectCard){
    return (
        <li className={css.wrapper}>
            <figure className={css.image}>
                <Image
                    alt={props.featuredImage.node.altText}
                    fill
                    loading="lazy"
                    src={props.featuredImage.node.sourceUrl}
                    style={{
                        objectFit:"cover",
                        objectPosition:"center"
                    }}
                    title={props.featuredImage.node.title}
                    quality={50}
                />
            </figure>
            <section className={css.box}>
                <p className={css.industry}>{props.page_project_article.industry}</p>
                <h3 className={css.title}>{props.title}</h3>
                <p 
                    className={css.excerpt} 
                    dangerouslySetInnerHTML={{__html:props.excerpt.length < 110 ?  props.excerpt : props.excerpt.substring(0,108) + '...'}}
                />
            </section>
        </li>
    )
}