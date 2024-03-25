import PrimaryButton from "buttons/PrimaryButton";
import SecondaryButton from "buttons/SecondaryButton";
import Image from "next/image";
import Link from "next/link";
import { tProjects } from "v/home/Projects/Projects.models";
import css from "v/home/Projects/Projects.module.scss";

export default function Projects({button,buttonCard,cards,title}:tProjects){

    const projects = cards.slice(0,1);

    return (
        <section className={css.wrapper} >
            <header className={css.container} >
                <h2 className={css.title}  dangerouslySetInnerHTML={{__html:title}} />
                <PrimaryButton
                    {...button}
                    mode="black"
                    rel="index follow"
                />
            </header>
            <ul className={css.cards} >
                {projects.map(({categories, excerpt,image,title,uri},index) => {
                    return (
                        <li className={css.card}  key={index}>
                            <section className={css.card__content} >
                                <ul className={css.card__content__categories} >
                                    {categories.map((item,index) => {
                                        return (
                                            <Link className={css.card__content__category} href="#" key={index}>
                                                {item}
                                            </Link>
                                        )
                                    })}
                                </ul>
                                <h3  className={css.card__content__title} dangerouslySetInnerHTML={{__html:title}} />
                                <p   className={css.card__content__excerpt} dangerouslySetInnerHTML={{__html:excerpt.substring(0,120)}} />
                                <SecondaryButton
                                    rel="index follow"
                                    target=""
                                    title={buttonCard}
                                    url={uri}
                                />
                            </section>
                            <figure className={css.card__image} >
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
                                        quality={55}
                                    />
                                </picture>
                            </figure>
                        </li>
                    )
                })}
            </ul>
            <p className={css.content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, tenetur dolorum. Alias ipsam magnam repudiandae ratione dolores aspernatur qui magni fugit impedit rerum quo tenetur in, obcaecati dicta minima maxime.

                Tenetur magni distinctio voluptatem accusamus repellat quibusdam repellendus saepe dolores ipsam nostrum similique sint maxime optio possimus est iusto illo placeat non, aut iure voluptas? Alias minima molestias consequatur minus.
            </p>
        </section>
    )
}