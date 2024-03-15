
import {tPrimaryButton} from "buttons/PrimaryButton/PrimaryButton.models";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import css from "buttons/PrimaryButton/PrimaryButton.module.scss";

export default function PrimaryButton({mode,rel,target,title,url}:tPrimaryButton){
    return(
        <Link className={css.wrapper} data-mode={mode} href={url} rel={rel} target={target}>
            <span className={css.border__left} />
            <span className={css.border__right} />
            <span className={css.label} >{title}</span>
            <i className={css.icon} ><BsArrowRight /></i>
        </Link>
    )
}