import Image from "next/image";
import Link from "next/link";
import { tImage } from "ts/types"
import { LinkButton } from "utils/Buttons"

type tPersonCardBase = {
    image:tImage;
    title:string;
    work:string;
    uri:string;
}

type tPersonCard = {

} & (
    {
        theme:"primary"
    } & tPrimary | {
        theme:"secondary"
    } & tSecondary
)

type tPrimary = {
    button:string;
    content:string;
    
}& tPersonCardBase

function Primary(props:tPrimary){
    return(
        <li>
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
            <div>
                <header>
                    <h3 dangerouslySetInnerHTML={{__html:props.title}} />
                    <h5  dangerouslySetInnerHTML={{__html:props.work}}  />
                </header>
                <p  dangerouslySetInnerHTML={{__html:props.content}}  />
                <LinkButton
                    label={props.button}
                    uri={props.uri}
                    theme="primary"
                />
            </div>
        </li>
    )
}

type tSecondary = {
} & tPersonCardBase

function Secondary(props:tSecondary){
    return(
        <li>
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
                </figure>
                <section>
                    <h3 dangerouslySetInnerHTML={{__html:props.title}} />
                    <p dangerouslySetInnerHTML={{__html:props.work}} />
                </section>
            </Link>
        </li>
    )
}


export default function PersonCard(props:tPersonCard){
    if(props.theme === "primary"){
        return <Primary {...props} />
    }else if(props.theme === "secondary"){
        return <Secondary {...props} />
    }
}