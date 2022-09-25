import { BlogCard } from "../../../Utilities/Cards/BlogCard/BlogCard"
import { IntArticles } from "./interface"
import { Wrapper } from "./style"

export const Articles = ({posts,search}:IntArticles) => {
    return(
        <Wrapper>
        {posts.filter((item) => item.date.toLowerCase().includes(search.toLowerCase()) || item.content.toLowerCase().includes(search.toLowerCase()) || item.title.toLowerCase().includes(search.toLowerCase())).map(({content,date,image,path,title},key) =>
          <BlogCard
            content={content}
            image={image}
            key={key}
            path={path}
            time={date}
            title={title}
          />
        )}
        </Wrapper>
    )
}