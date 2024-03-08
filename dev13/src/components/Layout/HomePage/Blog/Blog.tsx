import { PrimaryButton } from "utils/Buttons";
import { PrimaryBlog } from "cards/BlogCards";
import { tBlog } from "layout/HomePage/Blog/Blog.models";
import  css from "layout/HomePage/Blog/Blog.module.scss";

export default function Blog(props:tBlog){
    return(
        <div className={css.wrapper}>
            <div className={css.box__top}>
                <section className={css.box__top__details}>
                    <h2 className={css.box__top__details__title}>
                        {props.title}
                    </h2>
                    <PrimaryButton
                        href={props.button.url}
                        label={props.button.title}
                        rel="index follow"
                        target={props.button.target}
                        theme="light"
                    />
                    <p 
                        className={css.box__top__details__content}
                        dangerouslySetInnerHTML={{__html:props.overview}} 
                    />
                </section>
                <ul className={css.box__top__cards}>
                    {props.posts.map((item,index) => {
                        return (
                           <PrimaryBlog
                                {...item}
                                key={index}
                           />
                        )
                    })}
                </ul>
            </div>
            <div className={css.box__bottom}>
                <section className={css.box__bottom__container}>
                    <p 
                        className={css.box__bottom__container__content}
                        dangerouslySetInnerHTML={{__html:props.content}} 
                    />
                </section>
            </div>
        </div>
    )
}