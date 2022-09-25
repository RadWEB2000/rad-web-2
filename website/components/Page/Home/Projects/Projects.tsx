import { posts } from "../../../../data/posts";
import { ProjectCard } from "../../../Utilities/Cards/ProjectCard/ProjectCard";
import { ExcerptSectionContent } from "../../../Utilities/Contents/Page/ExcerptSectionContent";
import { IntProjects } from "./interface";
import { Wrapper } from "./style";
export const Projects = ({
  button,
  content,
  endContent,
  path,
  title,
}: IntProjects) => {
  const {projects} = posts;
  return (
    <Wrapper className="section">
      <ExcerptSectionContent
        button={button}
        content={content}
        endContent={endContent}
        path={path}
        title={title}
      />
      <ul>
        {projects.slice(0,1).map(({category,content,image,path,title}) => 
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
            isBig
          />
        )}
        {projects.slice(1,4).map(({category,content,image,path,title}) => 
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
      </ul>
    </Wrapper>
  );
};
