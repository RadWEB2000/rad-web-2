import getSocialMediaIcon from "app/lib/functions/getSocialMediaIcon";
import Link from "next/link";
import { tSocial } from "ts/types"

type tSocials = {
    socials:tSocial[];
}

export default function Socials(props:tSocials){
    return(
        <ul>
            {props.socials.map((item,index) => {
                return(
                    <li key={item.url}>
                        <Link href={item.url}>
                            <i>{getSocialMediaIcon(item.url)}</i>
                            <span dangerouslySetInnerHTML={{__html:item.label}} />
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}