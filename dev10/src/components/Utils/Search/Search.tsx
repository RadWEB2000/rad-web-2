"use client"
import css from "utils/Search/Search.module.scss";

type tSearch = {
    label:string;
    placeholder:string;
}

export default function Search(props:tSearch){
    return(
        <form autoComplete="off" className={css.wrapper} onSubmit={(e) => e.preventDefault()}>
            <label 
                className={css.label}
                dangerouslySetInnerHTML={{__html:props.label}} 
                htmlFor="search" 
            />
            <input 
                autoComplete="false"
                autoFocus
                className={css.field}
                id="search" 
                name="search" 
                placeholder={props.placeholder} type="text" 
                role="presentation"
            />
        </form>
    )
}