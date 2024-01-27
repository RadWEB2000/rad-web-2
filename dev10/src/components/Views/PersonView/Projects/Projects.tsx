import css from "views/PersonView/Projects/Projects.module.scss"
import { ProjectCard } from "utils/Cards";
import { tImage } from "ts/types";

type tProjects = {
    title:string;
    cards : {
        categories:string[];
        image:tImage;
        title:string;
        uri:string;
    }[];
}

export default function Projects(props:tProjects){
    return(
        <div
            className={css.wrapper}
        >
            <header
                className={css.title}
            >
                <h2
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
            </header>
            <ul
                className={css.blog}
            >
                {props.cards.slice(0,4).map((item,index) => {
                    return(
                        <ProjectCard
                            {...item}
                            key={index}
                            theme="secondary"
                        />
                    )
                })}
            </ul>
        </div>
    )
}