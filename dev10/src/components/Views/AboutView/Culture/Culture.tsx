import Image from "next/image";
import { tImage } from "ts/types"
import css from "views/AboutView/Culture/Culture.module.scss";

type tCulture = {
    content:string;
    image:tImage;
    title:string;
}

export default function Culture(props:tCulture){
    return(
        <div className={css.wrapper} >
            <figure className={css.image} >
                <Image
                    alt={props.image.altText}
                    fill
                    loading="lazy"
                    src={props.image.sourceUrl}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    title={props.image.title}
                />
            </figure>
            <section className={css.box} >
                <h2 
                    className={css.title} 
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <p
                    className={css.content} 
                    dangerouslySetInnerHTML={{__html:props.content}}
                />
            </section>
        </div>
    )
}