import { Hero } from "utils/Hero";
import { RiFacebookCircleFill } from "react-icons/ri";
import { Blog, Overview, Projects } from "views/PersonView";
import { q_article_posts_home } from "lib/configs/queries";
import { iArticlePostsHome } from "ts/interface";
import { wordpress_api } from "lib/configs/wordpress";
import exampleImage from "assets/graphics/example.jpg";

export default async function AboutUsPersonPage(){
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
                content="Numquam voluptatem error dignissimos illo distinctio. Alias nulla saepe. Qui minus necessitatibus quae necessitatibus laborum quod fuga eum fugiat. Ullam mollitia dicta excepturi eos sit id molestiae asperiores amet."
                image={{
                    altText:"",
                    sourceUrl:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title:""
                }}
                socials={[
                    {
                        icon:<RiFacebookCircleFill />,
                        label:"Facebook",
                        name:"RadoslawAdamczyk",
                        uri:"#",
                    },
                    {
                        icon:<RiFacebookCircleFill />,
                        label:"Facebook",
                        name:"RadoslawAdamczyk",
                        uri:"#",
                    },
                ]}
                title="Radosław Adamczyk"
                work="Specjalista SEO/SEM - Front end & Web developer"
                theme="person"
            />
            <main>
                <Overview
                    title="Kim jestem?"
                    content="Natus ut et molestiae. Exercitationem sequi minima est expedita itaque sapiente eligendi. Consectetur rerum deleniti suscipit.
                    <br/><br/>
                    Sit autem aliquid quaerat exercitationem deleniti optio debitis repellendus. Quam corporis illo et labore aspernatur. Impedit cumque vitae expedita eos natus. Quia ut culpa fuga iste. Esse ullam placeat cupiditate voluptatem nihil.
                    <br/><br/>
                    Dolores dolorum sint culpa ea nesciunt delectus dicta accusamus occaecati. Modi qui iusto mollitia maxime saepe possimus sit distinctio quas. Et sit inventore est. Atque ea placeat facere asperiores minima quam. Labore nam sequi. Aut voluptas qui vel molestias et. Aspernatur ut non inventore ipsum ut. Id id animi. Illo autem libero aut eveniet ea accusantium."   
                />
                <Blog
                    title="Blog"
                    cards={articles}
                />
                <Projects
                    title="Realizacje"
                    cards={[
                         {
                            categories:[
                                "Strony internetowe",
                                "SEO"
                            ],
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
                            image:{
                                altText:"",
                                sourceUrl:exampleImage.src,
                                title:""
                            },
                            title:"Agromar",
                            uri:"#"
                        } , 
                    ]}
                />
            </main>
        </>
    )
}