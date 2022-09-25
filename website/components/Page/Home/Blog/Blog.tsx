import { posts } from "../../../../data/posts"
import { BlogCard } from "../../../Utilities/Cards/BlogCard/BlogCard"
import { ExcerptSectionContent } from "../../../Utilities/Contents/Page/ExcerptSectionContent"
import { IntBlog } from "./interface"
import { Wrapper } from "./style"
export const Blog = ({button,content,endContent,path,title}:IntBlog) => {
    const {articles} = posts;
    return(
        <Wrapper className='section'>
            
                <ExcerptSectionContent
                    button={button}
                    content={content}
                    endContent={endContent}
                    path={path}
                    title={title}
                />
            
            <ul>
                {articles.slice(0,1).map(({content,date,image,path,title}) => 
                <BlogCard
                    isBig
                    content={content}
                    image={image}
                    key={title}
                    path={path}
                    time={date}
                    title={title}
                />
                )}
                {articles.slice(1,4).map(({content,date,image,path,title}) => 
                    <BlogCard
                        content={content}
                        image={image}
                        key={title}
                        path={path}
                        time={date}
                        title={title}
                    />
                )}
            </ul>
        </Wrapper>
    )
}