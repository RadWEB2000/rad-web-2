import PrimaryButton from "buttons/PrimaryButton";
import { tProjects } from "v/home/Projects/Projects.models";
import css from "v/home/Projects/Projects.module.scss";

import { PrimaryProjectCard } from "utils/Cards";
import Slider from "v/home/Projects/Slider";

export default function Projects({button,buttonCard,cards,title}:tProjects){


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
            <Slider
                button={buttonCard}
                cards={cards}
            />
            <p className={css.content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, tenetur dolorum. Alias ipsam magnam repudiandae ratione dolores aspernatur qui magni fugit impedit rerum quo tenetur in, obcaecati dicta minima maxime.

                Tenetur magni distinctio voluptatem accusamus repellat quibusdam repellendus saepe dolores ipsam nostrum similique sint maxime optio possimus est iusto illo placeat non, aut iure voluptas? Alias minima molestias consequatur minus.
            </p>
        </section>
    )
}