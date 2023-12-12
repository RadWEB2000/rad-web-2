import getArrowDirectionExpand from "app/lib/functions/getArrowDirectionExpand";
import styles from "l_nav/Menu/Item/Item.module.scss"
import Link from "next/link";

type tItem = {
    label:string;
    uri:string;
} & ( 
    {
        theme:"small"
    } |
    {
        handleExpand:() => void;
        isExpand:boolean;
        theme:"expand"
    } |
    {
        theme:"regural"
    } |
    {
        theme:"submenu"
    }
)

export default function Item(props:tItem){
    if(props.theme === "expand"){
        return(
            <div
                className={styles.expand}
            >
                <Link href={props.uri}>
                    {props.label}
                </Link>
                <button onClick={props.handleExpand}>
                    {getArrowDirectionExpand(props.isExpand)}
                </button>
            </div>
        )
    }else if(props.theme === "regural"){
        return(
            <li
                className={styles.regural}
            >
                <Link href={props.uri}>
                    {props.label}
                </Link>
            </li>
        )
    }else if(props.theme === "small"){
        return(
            <li
                className={styles.small}
            >
                <Link href={props.uri}>
                    {props.label}
                </Link>
            </li>
        )
        
    }else if(props.theme === "submenu"){
        return(
            <li
                className={styles.submenu}
            >
                <Link href={props.uri}>
                    {props.label}
                </Link>
            </li>
        )
    }
}