import css from "views/PersonView/Overview/Overview.module.scss"

type tOverview = {
    content:string;
    title:string;
}

export default function Overview(props:tOverview){
    return(
        <div
            className={css.wrapper}
        >
            <header
                className={css.title}
            >
                <h2
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
            </header>
            <section
                className={css.content}
            >
                <p
                    dangerouslySetInnerHTML={{__html:props.content}}
                />
            </section>
        </div>
    )
}