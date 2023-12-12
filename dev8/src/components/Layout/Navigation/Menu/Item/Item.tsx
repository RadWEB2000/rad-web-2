import styles from 'l_nav/Menu/Item/Item.module.scss';
import getArrowDirectionExpand from 'lib/functions/getArrowDirectionExpand';
import Link from 'next/link';

type tItem = {
    label:string;
    uri:string;
} & (
    {
        handleToggleOpen:() => void;
        isExpand:boolean;
        theme:"expand"
    } | {
        handleToggleOpen:() => void;
        isExpand:boolean;
        theme:"dropdown-expand"
    } | {
        theme:"regural"
    }| {
        closeSubmenu:() => void;
        theme:"submenu"
    }| {
        closeDropdown:() => void;
        theme:"dropdown-submenu"
    }
)

export default function Item(props:tItem){
    if(props.theme === "expand"){
        return(
            <div className={styles.expand}>
                <Link href={props.uri}>
                {props.label}
                </Link>
                <button onClick={props.handleToggleOpen}>
                    {getArrowDirectionExpand(props.isExpand)}
                </button>
            </div>
        )
    }else if(props.theme === "dropdown-expand") {
        return(
            <div className={styles.dropdown_expand}>
                <Link href={props.uri}>
                {props.label}
                </Link>
                <button onClick={props.handleToggleOpen}>
                    {getArrowDirectionExpand(props.isExpand)}
                </button>
            </div>
        )
    }else if(props.theme === "regural"){
        return(
            <li className={styles.regural}>
                <Link href={props.uri}>
                {props.label}
                </Link>
            </li>
        )
    }else if(props.theme === "submenu"){
        return(
            <li className={styles.submenu} onClick={props.closeSubmenu}>
                <Link href={props.uri}>
                    {props.label}
                </Link>
            </li>
        )
    }else if(props.theme === "dropdown-submenu"){
        return(
            <li className={styles.dropdown_submenu} onClick={props.closeDropdown}>
                <Link href={props.uri}>
                    {props.label}
                </Link>
            </li>
        )
    }
}