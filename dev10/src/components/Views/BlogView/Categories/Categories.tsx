import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Link from "next/link";
import css from "views/BlogView/Categories/Categories.module.scss";

type tCategories = {
    categories : {
        label:string;
        uri:string;
    }[];
}

export default function Categories(props:tCategories){
    return(
        <aside
            className={css.wrapper}
        >
            <h4 className={css.title} >Kategorie: </h4>
            <ul className={css.cards}>
                {props.categories.map((item,index) => {
                    return(
                        <Link className={css.item} href={item.uri} key={index} >
                            <span className={css.label}>{item.label}</span>
                            <i className={css.icon}><LiaLongArrowAltRightSolid/></i>
                        </Link>
                    )
                })}
            </ul>
        </aside>
    )
}