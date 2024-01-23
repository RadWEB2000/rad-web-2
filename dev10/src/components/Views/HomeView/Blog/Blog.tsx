import { BlogCard } from "utils/Cards";
import { tImage } from "ts/types";
import { LinkButton } from "utils/Buttons";
import css from "views/HomeView/Blog/Blog.module.scss"
import { iArticlePostsHome } from "app/types/interface";

type tBlog = {
    button:string;
    cards:iArticlePostsHome;
    content:string;
    title:string;
    uri:string;
}

export default function Blog(props:tBlog){
    return(
        <div className={css.wrapper} >
            <section className={css.container} >
                <h2 className={css.title}  dangerouslySetInnerHTML={{__html: props.title}} />
                <p className={css.content}  dangerouslySetInnerHTML={{__html: props.content}} />
            </section>
            <div className={css.button} >
                <LinkButton
                    label={props.button}
                    uri={props.uri}
                    filled
                    mode="light"
                    iconify
                    theme="secondary"
                />
            </div>
            <ul className={css.cards} >
                {props.cards.nodes.slice(0,6).map((item,index) => {
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