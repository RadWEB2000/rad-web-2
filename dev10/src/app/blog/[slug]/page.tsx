import { q_article } from "app/lib/configs/queries";
import { wordpress_api } from "app/lib/configs/wordpress";
import { Hero } from "utils/Hero";

export default async function ArticlePage({ params }: { params: { slug: string } }){


    console.log(params.slug)


    return (
        <>
            stronka


             {/* <Hero
                breadcrumbs={[
                    {
                        label: 'Start',
                        uri: '#',
                    },
                    {
                        label: 'Blog',
                        uri: '#',
                    },
                    {
                        label: 'Programowanie',
                        uri: '#',
                    },
                ]}
                category={{
                    label: 'Strony internetowe',
                    uri: '#',
                }}
                excerpt={article.excerpt}
                matter="technology"
                release="Wed May 29 2024 23:40:38 GMT+0200 (Central European Summer Time)"
                title={article.title}
                theme="article"
            />
            <main>
                <div
                    dangerouslySetInnerHTML={{__html:article.content}}
                    style={{
                        width:`clamp(5rem,90rem,95%)`                        ,
                        margin:"2rem auto",
                        fontSize:"1.7rem",
                        lineHeight:"1.9",
                        background:"red"
                    }}
                />
            </main> */}
        </>
    )
}