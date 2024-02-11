import Link from "next/link";
import { tButtons, tPrimaryButton } from "utils/Buttons/Buttons.models";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import css from "utils/Buttons/Buttons.module.scss";

function PrimaryButton(props:tPrimaryButton){
    return(
        <Link 
            className={css.primary__wrapper}
            href={props.uri}  
            target={props.target !== '' ? props.target : "_self"} 
        >
            <span 
                className={css.primary__label}
                dangerouslySetInnerHTML={{__html:props.label}} 
            />
            <i
                className={css.primary__icon}
            >
                {
                    props.doubleArrows ?
                    <MdOutlineKeyboardDoubleArrowRight /> :
                    <MdOutlineKeyboardArrowRight/>
                }
            </i>
        </Link>
    )
}


export default function Buttons(props:tButtons){
    if(props.theme === "primary"){
        return <PrimaryButton {...props} />
    }
}