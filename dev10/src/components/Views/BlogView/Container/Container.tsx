import css from "views/BlogView/Container/Container.module.scss";

type tContainer = {
    children:React.ReactNode;
}

export default function Container(props:tContainer){
    return (
        <main className={css.wrapper} >
            {props.children}
        </main>
    )
}