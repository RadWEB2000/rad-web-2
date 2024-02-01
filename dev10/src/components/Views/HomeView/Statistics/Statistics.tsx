import css from "views/HomeView/Statistics/Statistics.module.scss";

type tTile = {
    title:string;
    value:number;
}

type tStatistics = {
    image:string;
    title:string;
    content:string;
    cards:{card:tTile}[];
}

function Tile(props:tTile) {
    return (
        <li className={css.card}>
            <span className={css.value}>{props.value}</span>
            <h3 className={css.label} dangerouslySetInnerHTML={{__html:props.title}} />
        </li>
    )
}

export default function Statistics(props:tStatistics){
    return(
        <div
            className={css.wrapper}
            style={{
                backgroundImage:`url(${props.image})`,
                margin:"7rem 0"
            }}
        >
            <section className={css.box}>
                <h2 className={css.title} dangerouslySetInnerHTML={{__html:props.title}} />
                <p className={css.content} dangerouslySetInnerHTML={{__html:props.content}} />
            </section>
            <ul className={css.cards}>
                {props.cards.map((item,index) => {
                    return(
                        <Tile
                            {...item.card}
                            key={index}
                        />
                    )
                })}
            </ul>
        </div>
    )
}