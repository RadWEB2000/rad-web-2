import Image from 'next/image';
import Link from 'next/link';
import { tImage } from 'ts/types';

type tBlogMenuCard = {
    image: tImage;
    title: string;
    category: {
        label: string;
        uri: string;
    };
    release: string;
    uri: string;
}

export default function BlogMenuCard(props:tBlogMenuCard) {
    return(
        <div>
            <figure>
                <Image
                    alt={props.image.altText}
                    fill
                    loading="lazy"
                    src={props.image.sourceUrl}
                    style={{
                        objectFit:"cover",
                        objectPosition:"center"
                    }}
                    title={props.image.title}
                    quality={60}
                />
            </figure>
            <section>
                    <h4 dangerouslySetInnerHTML={{__html:props.title}} />
                    <div>
                        <Link  href={props.category.uri} >
                            {props.category.label}
                        </Link>
                        <p>22 PAŹ 2023</p>
                    </div>
                    <Link href={props.uri}>
                        więcej
                    </Link>
            </section>
        </div>
    )
}