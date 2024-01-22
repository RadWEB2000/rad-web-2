import { Hero } from "utils/Hero";
import { home } from "data/example/home";
import { Blog, Projects, Services } from "views/HomeView";
import exampleImage from "assets/graphics/example.jpg";
import { wordpress_api } from "lib/configs/wordpress";
import { q_articles_home,q_settings } from "lib/configs/queries";

export default async function HomePage(){

    const articles = await fetch(wordpress_api, {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            query:q_articles_home
        })
    }).then(res => res.json()).then((data) => {
        return data;
    })

    const settings = await fetch(wordpress_api, {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            query:q_settings
        })
    }).then(res => res.json()).then(data => {
        return data;
    })

    // console.log(articles.data.posts.edges[0])

    return(
        <>
            <Hero
                {...home.hero}
                theme="home"
            />
           <main>
                <Blog
                    button="wpisy"               
                    cards={articles.data.posts.edges}
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
           </main>
        </>
    )
}