import getDate from "functions/getDate";
import Image from "next/image";
import Link from "next/link";
import { tPrimaryBlogCard } from "cards/BlogCards/PrimaryBlogCard/PrimaryBlogCard.models";
import css from "cards/BlogCards/PrimaryBlogCard/PrimaryBlogCard.module.scss";

export default function PrimaryBlogCard(props:tPrimaryBlogCard){
    const date = getDate(props.date, "short")
    return (
        <Link className={css.wrapper} href={props.uri}>
            <figure className={css.image} >
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
            <section className={css.details} >
                <p className={css.relese} >{`${date.day} ${date.month()} ${date.year}`}</p>
                <h3 className={css.title} >{props.title}</h3>
                <ul className={css.categories} >
                    {props.categories.nodes.map((item,index) => {
                        return(
                            <Link className={css.category}  href={item.uri} key={index}>
                                {item.name}
                            </Link>
                        )
                    })}
                </ul>
                <p className={css.excerpt} 
                    dangerouslySetInnerHTML={{__html:props.excerpt.length < 110 ?  props.excerpt : props.excerpt.substring(0,108) + '...'}}
                />
            </section>
        </Link>
    )
}