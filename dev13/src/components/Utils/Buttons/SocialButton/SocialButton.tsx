import Link from "next/link";
import {tSocialButton} from "utils/Buttons/SocialButton/SocialButton.models"
import getSocialIcon from "functions/getSocialIcon";
import css from "utils/Buttons/SocialButton/SocialButton.module.scss"

export default function SocialButton(props:tSocialButton){
    const icon = getSocialIcon({
        url:props.link
    })
    return (
        <Link className={css.wrapper} data-theme={props.theme} href={props.link} rel="external nofollow" target="_blank">
            {icon}
        </Link>
    )
}