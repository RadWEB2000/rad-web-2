import css from "views/AboutView/Values/Values.module.scss";

type tValues = {
    title:string;
    cards: {
        title:string;
        content:string;
    }[];
}

export default function Values(props:tValues){
    return(
        <div className={css.wrapper} >
            <h2 
                className={css.title} 
                dangerouslySetInnerHTML={{__html:props.title}} 
            />
            <ul className={css.cards} >    
                {props.cards.map((item,index) => {
                    return(
                        <li className={css.card}  key={index}>
                            <h3  
                                className={css.card__title} 
                                dangerouslySetInnerHTML={{__html:item.title}}
                            />
                            <p 
                                className={css.card__content} 
                                dangerouslySetInnerHTML={{__html:item.content}}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}