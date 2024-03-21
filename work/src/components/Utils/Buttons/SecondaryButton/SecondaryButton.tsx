import Link from "next/link";
import { tSecondaryButton } from "buttons/SecondaryButton/SecondaryButton.models";
import css from "buttons/SecondaryButton/SecondaryButton.module.scss";

export default function SecondaryButton({rel,target,title,url}:tSecondaryButton){
    return (
        <Link className={css.wrapper} href={url} rel={rel} target={target} >
            {title}
        </Link>
    )
}