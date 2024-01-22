import { BlogCard } from "utils/Cards";
import { tImage } from "ts/types";
import { LinkButton } from "utils/Buttons";
import css from "views/HomeView/Blog/Blog.module.scss"

type tBlog = {
    button:string;
    cards:{
        node:{
            categories:{
                edges:{
                    label:string;
                    uri:string;
                }[]
            };
            image:{
                node: tImage
            };
            dateGmt:string;
            title:string;
            uri:string;
        }
    }[];
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
                {props.cards.slice(0,6).map((item,index) => {
                    console.log("blog card",item.node.image)
                    return(
                        <BlogCard
                            categories={item.node.categories.edges[0]}
                            release={item.node.dateGmt}
                            image={item.node.image}
                            title={item.node.title}
                            uri={item.node.uri}
                            key={index}
                            theme="primary"
                        />
                    )
                })}
            </ul>
        </div>
    )
}