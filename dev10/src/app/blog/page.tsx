import { Cards, Categories, Container } from "views/BlogView"
import { Hero } from "utils/Hero"
import { q_articles_blog_page } from "lib/configs/queries";
import { iArticlePostsHome, iArticlesBlogPage } from "ts/interface";
import { wordpress_api } from "lib/configs/wordpress";

export default async function BlogPage(){

      const articles:iArticlesBlogPage = await fetch(wordpress_api, {
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                query:q_articles_blog_page
            })
        }).then(res => res.json()).then(({data:{posts , page}}) => {
            return {
                articles:posts.nodes,
                button:page.blogPage.button_label
            };
        })

    console.log(articles)

    return(
        <>
            <Hero
                content="Explicabo quia alias. Ipsum reiciendis et. Possimus quibusdam sequi eum. Sunt ipsa sequi. In est quis nihil. Accusamus exercitationem quia dolores praesentium aspernatur."
                title="Blog"
                theme="blog"
                search={{
                    label:"Szukaj",
                    placeholder:"Wyszukaj"
                }}
            />
            <Container>
                <Categories
                    categories={[
                        {
                            label:"Programowanie",
                            uri:"#",
                        },
                        {
                            label:"Pozycjonowanie",
                            uri:"#",
                        },
                        {
                            label:"Systemy operacyjne",
                            uri:"#",
                        },
                        {
                            label:"Google Ads",
                            uri:"#",
                        },
                    ]}
                />
                <Cards
                    cards={articles}
                />
            </Container>
        </>
    )
}