import css from "views/PersonView/Blog/Blog.module.scss"
import { iArticlePostsHome } from "app/types/interface";
import { BlogCard } from "utils/Cards";

type tBlog = {
    title:string;
    cards:iArticlePostsHome;
}

export default function Blog(props:tBlog){
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
                {props.cards.nodes.slice(0,4).map((item,index) => {
                    return(
                        <BlogCard
                            categories={item.categories.nodes[0]}
                            date={item.dateGmt}
                            image={item.featuredImage.node}
                            title={item.title}
                            uri={item.uri}
                            key={index}
                            theme="primary"
                        />
                    )
                })}
            </ul>
        </div>
    )
}