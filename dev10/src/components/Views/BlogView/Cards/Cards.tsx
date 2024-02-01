import { BlogCard } from "utils/Cards"
import { iArticlesBlogPage } from "ts/interface";
import css from "views/BlogView/Cards/Cards.module.scss";

type tCards = {
    cards: iArticlesBlogPage;
}

export default function Cards(props:tCards){

    const {articles,button} = props.cards;

    return (
        <ul
            className={css.wrapper}
        >
            {articles.map((item,index) => {
                return(
                    <BlogCard
                        button={{
                            label:button,
                            link:`blog/${item.slug}`
                        }}
                        categories={item.categories.nodes}
                        date={item.dateGmt}
                        key={index}
                        excerpt={item.excerpt}
                        image={item.featuredImage.node}
                        title={item.title}
                        theme="quatenary"
                    />
                )
            })}
        </ul>
    )
}