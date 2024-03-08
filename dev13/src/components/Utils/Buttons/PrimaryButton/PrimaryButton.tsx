import Link from "next/link";
import { tPrimaryButton } from "utils/Buttons/PrimaryButton/PrimaryButton.models";
import { BsChevronRight } from "react-icons/bs";
import css from "utils/Buttons/PrimaryButton/PrimaryButton.module.scss";

export default function PrimaryButton(props:tPrimaryButton){
    return (
        <Link 
            className={css.wrapper}
            data-theme={props.theme}
            href={props.href} 
            target={props.target === "" ? "_self" : props.target} 
            rel={props.rel}
        >
            <span
                className={css.label}
            >
                {props.label}
            </span>
            <i className={css.icon}>
                <BsChevronRight />
            </i>
        </Link>
    )
}