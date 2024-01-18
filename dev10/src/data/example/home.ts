import img from "assets/graphics/example.jpg";

export const home = {
    hero : {
        title:"RadWEB",
        slogan:"Z nami <br/> ku przyszłości",
        buttons:[
            {
                label:"Blog",
                uri:"#"
            },
            {
                label:"Kontakt",
                uri:"#"
            },
        ],
        movie:"/assets/movies/hero_1.webm"
    },
    services:{
        title:"Oferta",
        content:"Voluptatibus dolorum possimus ipsum soluta dolor at beatae quo sed. Quo ipsum veniam eius sit. Facilis eos molestias tempore minus odit quo accusamus ducimus est. Aliquid qui non aliquam non in similique veritatis repellendus similique. Consequatur impedit est itaque repellendus sunt inventore voluptas. Quia nisi eveniet ut accusantium ducimus rerum sed.",
        cards: [
            {
                button:"więcej",
                cards:[
                    {
                        image:{ 
                            altText:"",
                            sourceUrl:img.src,
                            title:""
                        },
                        title:"Landing Page",
                        uri:"#"
                    },
                    {
                        image:{ 
                            altText:"",
                            sourceUrl:img.src,
                            title:""
                        },
                        title:"Portfolio",
                        uri:"#"
                    },
                    {
                        image:{ 
                            altText:"",
                            sourceUrl:img.src,
                            title:""
                        },
                        title:"Blog",
                        uri:"#"
                    },
                    {
                        image:{ 
                            altText:"",
                            sourceUrl:img.src,
                            title:""
                        },
                        title:"Strony branżowe",
                        uri:"#"
                    }
                ],
                content:`Qui tenetur veritatis et cupiditate assumenda nulla quod dolore perspiciatis. Voluptatibus qui et tenetur et eum numquam dolorem incidunt pariatur. Quaerat eius vel et quidem`,
                image:{ 
                    altText:"",
                    sourceUrl:img.src,
                    title:""
                },
                title:"Strony internetowe",
                uri:"#"
            },
            {
                button:"więcej",
                cards:[
                    {
                        image:{ 
                            altText:"",
                            sourceUrl:img.src,
                            title:""
                        },
                        title:"SEO lokalne",
                        uri:"#"
                    },
                    {
                        image:{ 
                            altText:"",
                            sourceUrl:img.src,
                            title:""
                        },
                        title:"Pozycjonowanie e-commerce",
                        uri:"#"
                    },
                    {
                        image:{ 
                            altText:"",
                            sourceUrl:img.src,
                            title:""
                        },
                        title:"Audyt SEO",
                        uri:"#"
                    },
                ],
                content:`Qui tenetur veritatis et cupiditate assumenda nulla quod dolore perspiciatis. Voluptatibus qui et tenetur et eum numquam dolorem incidunt pariatur. Quaerat eius vel et quidem`,
                image:{ 
                    altText:"",
                    sourceUrl:img.src,
                    title:""
                },
                title:"Pozycjonowanie",
                uri:"#"
            },
            {
                button:"więcej",
                content:`Qui tenetur veritatis et cupiditate assumenda nulla quod dolore perspiciatis. Voluptatibus qui et tenetur et eum numquam dolorem incidunt pariatur. Quaerat eius vel et quidem`,
                image:{ 
                    altText:"",
                    sourceUrl:img.src,
                    title:""
                },
                title:"Copywriting",
                uri:"#"
            }
        ]
    }
}