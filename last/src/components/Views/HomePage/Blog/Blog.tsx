import { PrimaryBlogCard } from "u_cards/BlogCard";
import { PrimaryButton } from "utils/Buttons";
import { tBlog } from "v_home/Blog/Blog.models";
import css from "v_home/Blog/Blog.module.scss"
export default function Blog({button,cards,content,overview,title}:tBlog){
    return (
        <div className={css.wrapper}>
            <section className={css.overview__box}>
                <h2 className={css.title} dangerouslySetInnerHTML={{__html:title}} />
                <PrimaryButton {...button} icon="expand" rel="index follow" />
                <p className={css.overview} dangerouslySetInnerHTML={{__html:overview}} />
            </section>
            {
                cards &&
                <div className={css.cards}>
                    {cards.map((item,index) => {
                        return (
                           <PrimaryBlogCard
                                {...item}
                                key={index}
                           />
                        )  
                    })}
                </div>
            }
            {
                content &&
                <section className={css.content__box}>
                    <p className={css.content}  dangerouslySetInnerHTML={{__html:content}}  />
                </section>
            }
        </div>
    )
}