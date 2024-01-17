import { Hero } from "utils/Hero";
import { home } from "data/example/home";
import { Blog, Projects } from "views/HomeView";
import exampleImage from "assets/graphics/example.jpg";

export default function HomePage(){
    return(
        <>
            <Hero
                {...home.hero}
                theme="home"
            />
           <main>
                <Blog
                    button="wpisy"               
                    cards={[
                        {
                            category:{
                                label:"Pozycjonowanie",
                                uri:"#"
                            },
                            image:{
                                altText:"",
                                sourceUrl:"https://images.unsplash.com/photo-1494972688394-4cc796f9e4c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                title:""
                            },
                            release:"Thu Sep 12 2024 04:10:52 GMT+0200 (Central European Summer Time)",
                            title:"Czym jest sezonowość słów kluczowych?",
                            uri:"#"
                        },
                        {
                            category:{
                                label:"SEO",
                                uri:"#"
                            },
                            image:{
                                altText:"",
                                sourceUrl:"https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                title:""
                            },
                            release:"Thu Sep 12 2024 04:10:52 GMT+0200 (Central European Summer Time)",
                            title:"Jak powstał Bing? – alternatywa dla Google",
                            uri:"#"
                        },
                        {
                            category:{
                                label:"Systemy operacyjne",
                                uri:"#"
                            },
                            image:{
                                altText:"",
                                sourceUrl:"https://images.unsplash.com/photo-1506259091721-347e791bab0f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                title:""
                            },
                            release:"Thu Sep 12 2024 04:10:52 GMT+0200 (Central European Summer Time)",
                            title:"Czym jest środowisko graficzne Linux?",
                            uri:"#"
                        },
                        {
                            category:{
                                label:"Programowanie",
                                uri:"#"
                            },
                            image:{
                                altText:"",
                                sourceUrl:"https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                title:""
                            },
                            release:"Thu Sep 12 2024 04:10:52 GMT+0200 (Central European Summer Time)",
                            title:"Jak tworzyć zmienne w CSS?",
                            uri:"#"
                        },
                        {
                            category:{
                                label:"Linux",
                                uri:"#"
                            },
                            image:{
                                altText:"",
                                sourceUrl:"https://images.unsplash.com/photo-1470645792662-dd18394f8c97?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                title:""
                            },
                            release:"Thu Sep 12 2024 04:10:52 GMT+0200 (Central European Summer Time)",
                            title:"Co nowego znajdziesz w Zorin OS 17?",
                            uri:"#"
                        },
                        {
                            category:{
                                label:"Videomaking",
                                uri:"#"
                            },
                            image:{
                                altText:"",
                                sourceUrl:"https://images.unsplash.com/photo-1568430462989-44163eb1752f?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                title:""
                            },
                            release:"Thu Sep 12 2024 04:10:52 GMT+0200 (Central European Summer Time)",
                            title:"Czym się kierować w wyborze kamery?",
                            uri:"#"
                        },
                    ]}
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
           </main>
        </>
    )
}