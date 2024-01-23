import { Hero } from "utils/Hero";
import { home } from "data/example/home";
import { About, Blog, Projects, Services } from "views/HomeView";
import exampleImage from "assets/graphics/example.jpg";
import { wordpress_api } from "lib/configs/wordpress";
import { q_article_posts_home,q_settings } from "lib/configs/queries";
import {iArticlePostsHome, iSettings} from "ts/interface";
import maleImg from "assets/graphics/male.jpg";
import femaleImg from "assets/graphics/female.jpg";
export default async function HomePage(){

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

    const settings:iSettings = await fetch(wordpress_api, {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            query:q_settings
        })
    }).then(res => res.json()).then(({data:{allSettings}}) => {
        return allSettings;
    })


    return(
        <>
            <Hero
                {...home.hero}
                theme="home"
            />
           <main>
                <Blog
                    button="wpisy"               
                    cards={articles}
                    content={`Qui cum molestiae molestiae commodi vero. In tempore sequi aperiam asperiores nam dolores hic ut. Explicabo consequatur aliquid blanditiis rem itaque consequatur voluptatum saepe numquam.`}
                    title="Blog"
                    uri="#"
                />
                <Projects
                    button="wszystkie projekty"
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
                    content="Expedita aut voluptatem quia doloremque beatae voluptatibus. Quae consequuntur corporis velit qui iste. Quia dolorum vel totam eos et nam ut numquam et. Similique aut atque voluptas perferendis sapiente temporibus. Nulla minima dolores qui fuga. Aut molestiae dolor facilis saepe. Ratione tempore voluptate sed ut excepturi quis provident nostrum. Omnis suscipit eveniet dicta ut libero porro."
                    title="Projekty"
                    uri="#"
                />
                <Services
                    cards={home.services.cards}
                    title={home.services.title}

                />
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
                    content={`Doloribus itaque quia illum sit. Eaque nesciunt ducimus perspiciatis est aut vitae quia veniam voluptatibus. Eos quod alias ratione ea sapiente inventore suscipit. Quam corrupti voluptatum. Sapiente quae maxime provident maxime exercitationem aperiam vel omnis. Voluptatum vel aut atque. Veniam nam quia mollitia qui. Aliquid omnis unde est sint inventore.`}
                    title="O nas - zespół RadWEB"
                />
           </main>
        </>
    )
}