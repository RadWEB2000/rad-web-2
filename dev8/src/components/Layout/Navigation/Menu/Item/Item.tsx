import styles from 'l_nav/Menu/Item/Item.module.scss';
import Link from 'next/link';
import {
  BiDownArrowAlt,
  BiUpArrowAlt,
} from 'react-icons/bi';

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
        theme:"submenu"
    }| {
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
                    {
                        props.isExpand ?
                        <BiUpArrowAlt /> : 
                        <BiDownArrowAlt />
                    }
                </button>
            </div>
        )
    }else if(props.theme === "dropdown-expand") {
        return(
            <div className={styles.dropdown}>
                <Link href={props.uri}>
                {props.label}
                </Link>
                <button onClick={props.handleToggleOpen}>
                {
                        props.isExpand ?
                        <BiUpArrowAlt /> : 
                        <BiDownArrowAlt />
                    }
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
            <li className={styles.submenu}>
                <Link href={props.uri}>
                    {props.label}
                </Link>
            </li>
        )
    }else if(props.theme === "dropdown-submenu"){
        return(
            <li className={styles.submenu}>
                <Link href={props.uri}>
                    {props.label}
                </Link>
            </li>
        )
    }
}