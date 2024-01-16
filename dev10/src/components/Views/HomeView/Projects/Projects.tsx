import { ProjectCard } from "utils/Cards";
import { tImage } from "ts/types";
import { LinkButton } from "utils/Buttons";
import css from "views/HomeView/Projects/Projects.module.scss";

type tProjects = {
    button:string;
    cards : {
        categories:string[];
        content:string;
        image:tImage;
        title:string;
        uri:string;
    }[];
    content:string;
    title:string;
    uri:string;
}

export default function Projects(props:tProjects){
    return(
        <section
            className={css.wrapper}
        >
            <div className={css.box}>
                <h2 className={css.title} dangerouslySetInnerHTML={{__html:props.title}} />
                <p className={css.content} dangerouslySetInnerHTML={{__html:props.content}} />
                <LinkButton
                    label={props.button}
                    uri={props.uri}
                    filled
                    iconify
                    theme="secondary"
                />
            </div>
            <ul className={css.cards}> 
                {props.cards.slice(0,5).map((item,index) => {
                    return(
                        <ProjectCard
                            {...item}
                            key={index}
                            theme="primary"
                        />
                    )
                })}
            </ul>
        </section>
    )
}