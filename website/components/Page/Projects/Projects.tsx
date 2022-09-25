import { ProjectCard } from "../../Utilities/Cards/ProjectCard/ProjectCard"
import { IntProject } from "./interface";
import { Wrapper } from './style';
export const Projects = ({cards}:IntProject) => {
    return(
        <Wrapper>
            {cards.map(({category,content,image,path,title}) =>
                <ProjectCard
                    category={{
                        name:category.name,
                        value:category.value
                    }}
                    content={content}
                    image={image}
                    key={title}
                    path={path}
                    title={title}
                />
            )}
        </Wrapper>
    )
}