import { BlogCard } from "utils/Cards";
import { tImage } from "ts/types";
import { LinkButton } from "utils/Buttons";
import css from "views/HomeView/Blog/Blog.module.scss"

type tBlog = {
    button:string;
    cards:{
        category:{
            label:string;
            uri:string;
        };
        image:tImage;
        release:string;
        title:string;
        uri:string;
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
                    iconify
                    theme="secondary"
                />
            </div>
            <ul className={css.cards} >
                {props.cards.slice(0,6).map((item,index) => {
                    return(
                        <BlogCard
                            {...item}
                            key={index}
                            theme="primary"
                        />
                    )
                })}
            </ul>
        </div>
    )
}