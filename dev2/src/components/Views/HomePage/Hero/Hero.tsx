import Image from 'next/image';
import Link from 'next/link';
import { MdChevronRight } from 'react-icons/md';
import { tImage } from 'ts/types';

type tHero = {
    buttons?:{
        label:string;
        uri:string;
    }[];
    image:tImage;
    slogan:string;
    title:string;
}

export default function Hero(props:tHero){
    return(
        <header>
            <figure>
                <Image
                    alt={props.image.altText}
                    fill
                    loading="eager"
                    src={props.image.sourceUrl}
                    style={{
                        objectFit:"cover",
                        objectPosition:"center"
                    }}
                    title={props.image.title}
                />
            </figure>
            <div>
                <section>
                    <h1
                        dangerouslySetInnerHTML={{__html:props.title}}
                    />
                    <h2
                        dangerouslySetInnerHTML={{__html:props.slogan}}
                    />
                    {props.buttons &&
                        <ul>
                            {props.buttons.map((item,index) => {
                                return(
                                    <li key={index}>
                                        <Link href={item.uri}>
                                            <span dangerouslySetInnerHTML={{__html:item.label}} />
                                            <i>
                                            <MdChevronRight />
                                            </i>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    }
                </section>
            </div>
        </header>
    )
}