import Link from "next/link";
import { tButtons, tPrimaryButton} from "utils/Buttons/Buttons.models";;
import { HiArrowUpRight } from "react-icons/hi2";
import css from "utils/Buttons/Buttons.module.scss";


function PrimaryButton(props:tPrimaryButton){
    return (
        <Link className={css.primary} data-mode={props.mode} href={props.uri} target={props.target} rel={props.rel}>
            <span
                className={css.primary__label} 
                dangerouslySetInnerHTML={{__html:props.label}}
            />
            <i  className={css.primary__icon} >
                <HiArrowUpRight />
            </i>
        </Link>
    )
}

export default function Buttons(props:tButtons) {
    if(props.theme === "primary"){ 
        return <PrimaryButton {...props} />
    }
}