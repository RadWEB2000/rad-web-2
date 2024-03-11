import Link from "next/link";
import {tPrimaryButton} from "buttons/PrimaryButton/PrimaryButton.models";
import { PiArrowUpRightBold } from "react-icons/pi";
import css from "buttons/PrimaryButton/PrimaryButton.module.scss"

export default function PrimaryButton({rel,target,title,url}:tPrimaryButton){
    return (
        <li className={css.wrapper}>
            <span className={`${css.line} ${css.top_left}`} />
            <span className={`${css.line} ${css.top_right}`} />
            <span className={`${css.line} ${css.bottom_left}`} />
            <span className={`${css.line} ${css.bottom_right}`} />
            <Link className={css.box}  href={url} target={target} rel={rel}>
                <span className={css.label} >
                    {title}
                </span>
                <i className={css.icon} >
                    <PiArrowUpRightBold />
                </i>
            </Link>
        </li>
    )
}