import { Hero } from "utils/Hero";
import { home } from "data/example/home";
import { About, Blog, Projects, Services, Statistics } from "views/HomeView";
import exampleImage from "assets/graphics/example.jpg";
import { wordpress_api } from "lib/configs/wordpress";
import { q_article_posts_home,q_home_page,q_settings } from "lib/configs/queries";
import {iArticlePostsHome, iHomePage, iSettings} from "ts/interface";
import maleImg from "assets/graphics/male.jpg";
import femaleImg from "assets/graphics/female.jpg";

export default async function HomePage(){


    const homePage:iHomePage = await fetch(wordpress_api, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            query:q_home_page
        })
    }).then(res => res.json()).then(({data : {page : {homePage}}}) => {
        return homePage
    })


    // console.log(homePage)

    const articles:iArticlePostsHome = await fetch(wordpress_api, {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            query:q_article_posts_home
        })
    }).then(res => res.json()).then(({data:{posts}}) => {
        return posts;
    })
   
    return(
        <>
            <Hero
                buttons={homePage.hero.buttons}
                title={homePage.hero.title}
                slogan={homePage.hero.slogan}
                movie="/assets/movies/hero_1.webm"
                theme="home"
            />
           <main>
                <About
                    button={{
                        label:"Poznaj nas",
                        uri:"#"
                    }}
                    cards={[
                        {
                            button:"więcej",
                            content:"Velit natus et et id aut nulla fugit quo vitae. Provident eligendi quasi saepe dolores consequuntur impedit quo nihil. Ipsa qui nesciunt autem distinctio deleniti. Error quae illum laborum et nulla molestias est. Reiciendis dicta enim magnam ut quas ex.",
                            image:{
                                altText:"",
                                sourceUrl:maleImg.src,
                                title:""
                            },
                            title:"Radosław Adamczyk",
                            uri:"#",
                            work:"Specjalista SEO/SEM | Front-end & Web Developer"
                        },
                        {
                            button:"więcej",
                            content:"Velit natus et et id aut nulla fugit quo vitae. Provident eligendi quasi saepe dolores consequuntur impedit quo nihil. Ipsa qui nesciunt autem distinctio deleniti. Error quae illum laborum et nulla molestias est. Reiciendis dicta enim magnam ut quas ex.",
                            image:{
                                altText:"",
                                sourceUrl:femaleImg.src,
                                title:""
                            },
                            title:"Anna Kowalska",
                            uri:"#",
                            work:"Copywriter"
                        },
                    ]}
                    content={homePage.team.content}
                    title={homePage.team.title}
                />
                <Statistics
                    title={homePage.statistics.title}
                    content={homePage.statistics.content}
                    cards={homePage.statistics.cards}
                    image="https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Blog
                    button={homePage.blog.button}
                    cards={articles}
                    content={homePage.blog.content}
                    title={homePage.blog.title}
                />
                <Projects
                    button={homePage.projects.button}
                    cards={[
                        {
                            categories:[
                                "Strony internetowe",
                                "SEO"
                            ],
                            content:`Provident et quas unde quidem. Nulla repellat aliquam architecto perferendis provident sunt vel excepturi quis. Voluptate alias aut ratione explicabo aut vel. Facilis voluptatem et est magni dolore id. Ex ea nulla. Repellat eaque aspernatur perspiciatis ullam velit cum.`,
                            image:{
                                altText:"",
                                sourceUrl:exampleImage.src,
                                title:""
                            },
                            title:"Mechanik Ludomy",
                            uri:"#"
                        } , 
                        {
                            categories:[
                                "SEO"
                            ],
                            content:`Provident et quas unde quidem. Nulla repellat aliquam architecto perferendis provident sunt vel excepturi quis. Voluptate alias aut ratione explicabo aut vel. Facilis voluptatem et est magni dolore id. Ex ea nulla. Repellat eaque aspernatur perspiciatis ullam velit cum. Odit sequi similique illum facere. Necessitatibus sapiente quibusdam ea sit molestiae facere aspernatur dolores. Rem deleniti dolorem quae. Nostrum quaerat perferendis et.`,
                            image:{
                                altText:"",
                                sourceUrl:exampleImage.src,
                                title:""
                            },
                            title:"Borówkowy Gaj",
                            uri:"#"
                        } , 
                        {
                            categories:[
                                "Strony internetowe"
                            ],
                            content:`Provident et quas unde quidem. Nulla repellat aliquam architecto perferendis provident sunt vel excepturi quis. Voluptate alias aut ratione explicabo aut vel. Facilis voluptatem et est magni dolore id. Ex ea nulla. Repellat eaque aspernatur perspiciatis ullam velit cum.`,
                            image:{
                                altText:"",
                                sourceUrl:exampleImage.src,
                                title:""
                            },
                            title:"Agromar",
                            uri:"#"
                        } , 
                    ]}
                    content={homePage.projects.content}
                    title={homePage.projects.title}
                />
                <Services
                    cards={home.services.cards}
                    title={homePage.services.title}
                />
                
           </main>
        </>
    )
}