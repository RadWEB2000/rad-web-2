import { tImage } from "ts/types";
import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "utils/Buttons";
import css from "utils/Cards/ServiceCard/ServiceCard.module.scss"

type tServiceCardBase = {
    title:string;
    uri:string;
}

type tServiceCard = {} & (
    {
        theme:"home"
    } & tHome
)

type tHome = {
    button:string;
    cards?:tHomeTile[];
    content:string;
    image:tImage;
} & tServiceCardBase

type tHomeTile = {
    image:tImage;
} & tServiceCardBase

function HomeTile(props:tHomeTile) {
    return(
        <Link href={props.uri}>
            <figure>
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
            </figure>``
            <h3 dangerouslySetInnerHTML={{__html:props.title}} />
        </Link>
    )
}

function Home(props:tHome){
    return(
        <li>
            <section>
                <div>
                    <h3 dangerouslySetInnerHTML={{__html:props.title}} />
                    <p  dangerouslySetInnerHTML={{__html:props.content}} />
                    <LinkButton
                        label={props.button}
                        theme="primary"
                        uri={props.uri}
                    />
                </div>
                <div>
                    <figure>
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
                </div>
            </section>
            {
                props.cards &&
                <ul>
                    {props.cards.map((item,index) => {
                        return <HomeTile {...item} key={index} />
                    })}
                </ul>
            }
        </li>
    )
}

export default function ServiceCard(props:tServiceCard){
    if(props.theme === "home"){
        return <Home {...props} />
    }
}