import Link from "next/link";
import { GoArrowUpRight as ExpandIcon } from "react-icons/go";
import { TiArrowRight as RightIcon } from "react-icons/ti";
import {tPrimaryButton} from "u_buttons/PrimaryButton/PrimaryButton.models";
import css from "u_buttons/PrimaryButton/PrimaryButton.module.scss";

export default function PrimaryButton({icon,rel,target,title,url}:tPrimaryButton){
    return (
        <Link className={css.wrapper} href={url} target={target} rel={rel}>
            <span  className={css.label} >{title}</span>
            {
                icon !== "none" &&
                <i className={css.icon} >
                    {icon === "expand" && <ExpandIcon/>}
                    {icon === "right" && <RightIcon/>}
                </i>
            }
        </Link>
    )
}