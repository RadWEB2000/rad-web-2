"use client"
import SecondaryButton from "buttons/SecondaryButton"
import Image from "next/image"
import css from "cards/ProjectCards/PrimaryProjectCard/PrimaryProjectCard.module.scss";
import { tPrimaryProjectCard } from "cards/ProjectCards/PrimaryProjectCard/PrimaryProjectCard.models";
import Link from "next/link";
import {motion} from "framer-motion";

export default function PrimaryProjectCard({button,categories, direction, excerpt,image,title,uri}:tPrimaryProjectCard){



    return (
        <motion.li 
            className={css.wrapper} 
            key={title}
            initial={{
                opacity: 1,
                x: direction === "left" ? 300 : -300
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 1,
                x: direction === "left" ? -300 : 300
              }}
        >
            <section className={css.container} >
                <ul className={css.categories} >
                    {categories.map((item,index) => {
                        return (
                            <Link className={css.category} href="#" key={index}>
                                {item}
                            </Link>
                        )
                    })}
                </ul>
                <h3  className={css.title} dangerouslySetInnerHTML={{__html:title}} />
                <p   className={css.excerpt} dangerouslySetInnerHTML={{__html:excerpt.substring(0,120)}} />
                <SecondaryButton
                    rel="index follow"
                    target=""
                    title={button}
                    url={uri}
                />
            </section>
            <figure className={css.image} >
                <picture>
                    <Image
                        alt={image.altText}
                        fill
                        loading="lazy"
                        src={image.sourceUrl}
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        title={image.title}
                        quality={35}
                    />
                </picture>
            </figure>
        </motion.li>
    )
}