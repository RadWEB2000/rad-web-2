import getSocialMediaIcon from "app/lib/functions/getSocialMediaIcon";
import Link from "next/link";
import styles from "l_nav/Menu/BigMenu/Socials/Socials.module.scss";
import { tSocial } from "ts/types"

type tSocials = {
    socials:tSocial[];
}

export default function Socials(props:tSocials){
    return(
        <ul className={styles.wrapper}>
            {props.socials.map((item,index) => {
                return(
                    <Link href={item.url} key={item.url}>
                        <i>{getSocialMediaIcon(item.url)}</i>
                        <span dangerouslySetInnerHTML={{__html:item.label}} />
                    </Link>
                )
            })}
        </ul>
    )
}