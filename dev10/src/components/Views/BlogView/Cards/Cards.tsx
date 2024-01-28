import { BlogCard } from "utils/Cards"
import { tImage } from 'ts/types';
import css from "views/BlogView/Cards/Cards.module.scss";

type tCards = {
    cards?: {
        button: {
            label:string;
            uri:string;
        };
        categories: {
            label:string;
            uri:string;
        }[];
        image:tImage;
        title:string;
        excerpt:string;
        date:string;
    }[]
}

export default function Cards(props:tCards){
    return (
        <ul
            className={css.wrapper}
        >
            <BlogCard
                button={{
                    label:"czytaj",
                    uri:"#"
                }}
                categories={[
                    {
                        label:"Systemy operacyjne",
                        uri:"#"
                    },
                    {
                        label:"Linux",
                        uri:"#"
                    },
                ]}
                date="Wed Jul 31 2024 08:27:20 GMT+0200 (Central European Summer Time)"
                excerpt={`Sunt unde est laborum laborum sunt. Dignissimos voluptatem molestiae error error sequi iusto aut hic. Asperiores id nostrum sed facilis ipsum omnis facilis mollitia. Voluptatem blanditiis quo vel sequi veritatis dolorem deleniti. Quo quam commodi quo asperiores voluptas quia rerum autem. Enim repellat ut neque.`}
                image={{
                    altText:"",
                    sourceUrl:"https://rad-web.pl/_next/image?url=https%3A%2F%2Frad-web-cms.pl%2Fwp-content%2Fuploads%2F2023%2F12%2Fco-nowego-znajdziesz-w-zorin-os-17-radweb.webp&w=1920&q=70",
                    title:""
                }}
                title="Co nowego znajdziesz w Zorin OS 17?"
                theme="quatenary"
            />
            <BlogCard
                button={{
                    label:"czytaj",
                    uri:"#"
                }}
                categories={[
                    {
                        label:"Programowanie",
                        uri:"#"
                    },
                    {
                        label:"CSS",
                        uri:"#"
                    },
                ]}
                date="Wed Jul 31 2024 08:27:20 GMT+0200 (Central European Summer Time)"
                excerpt={`Sunt unde est laborum laborum sunt. Dignissimos voluptatem molestiae error error sequi iusto aut hic. Asperiores id nostrum sed facilis ipsum omnis facilis mollitia. Voluptatem blanditiis quo vel sequi veritatis dolorem deleniti. Quo quam commodi quo asperiores voluptas quia rerum autem. Enim repellat ut neque.`}
                image={{
                    altText:"",
                    sourceUrl:"https://rad-web.pl/_next/image?url=https%3A%2F%2Frad-web-cms.pl%2Fwp-content%2Fuploads%2F2023%2F11%2Fjak-tworzyc-zmienne-w-css-radweb-1568x1232.webp&w=1920&q=70",
                    title:""
                }}
                title="Jak tworzyć zmienne w CSS?"
                theme="quatenary"
            />
            <BlogCard
                button={{
                    label:"czytaj",
                    uri:"#"
                }}
                categories={[
                    {
                        label:"Systemy operacyjne",
                        uri:"#"
                    },
                    {
                        label:"Linux",
                        uri:"#"
                    },
                ]}
                date="Wed Jul 31 2024 08:27:20 GMT+0200 (Central European Summer Time)"
                excerpt={`Sunt unde est laborum laborum sunt. Dignissimos voluptatem molestiae error error sequi iusto aut hic. Asperiores id nostrum sed facilis ipsum omnis facilis mollitia. Voluptatem blanditiis quo vel sequi veritatis dolorem deleniti. Quo quam commodi quo asperiores voluptas quia rerum autem. Enim repellat ut neque.`}
                image={{
                    altText:"",
                    sourceUrl:"https://rad-web.pl/_next/image?url=https%3A%2F%2Frad-web-cms.pl%2Fwp-content%2Fuploads%2F2023%2F11%2Fczym-jest-srodowisko-graficzne-linux-radweb-1568x2688.webp&w=1920&q=70",
                    title:""
                }}
                title="Czym jest środowisko graficzne Linux?"
                theme="quatenary"
            />
            <BlogCard
                button={{
                    label:"czytaj",
                    uri:"#"
                }}
                categories={[
                    {
                        label:"Pozycjonowanie",
                        uri:"#"
                    },
                    {
                        label:"Bing",
                        uri:"#"
                    },
                ]}
                date="Wed Jul 31 2024 08:27:20 GMT+0200 (Central European Summer Time)"
                excerpt={`Sunt unde est laborum laborum sunt. Dignissimos voluptatem molestiae error error sequi iusto aut hic. Asperiores id nostrum sed facilis ipsum omnis facilis mollitia. Voluptatem blanditiis quo vel sequi veritatis dolorem deleniti. Quo quam commodi quo asperiores voluptas quia rerum autem. Enim repellat ut neque.`}
                image={{
                    altText:"",
                    sourceUrl:"https://rad-web.pl/_next/image?url=https%3A%2F%2Frad-web-cms.pl%2Fwp-content%2Fuploads%2F2023%2F11%2Fjak-powstal-bing-alternatywa-dla-google-radweb-1568x2350.webp&w=1920&q=70",
                    title:""
                }}
                title="Jak powstał Bing? – alternatywa dla Google"
                theme="quatenary"
            /> 
        </ul>
    )
}