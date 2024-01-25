type tValues = {
    title:string;
    cards: {
        title:string;
        content:string;
    }[];
}

export default function Values(props:tValues){
    return(
        <div>
            <h2 
                dangerouslySetInnerHTML={{__html:props.title}} 
            />
            <ul>    
                {props.cards.map((item,index) => {
                    return(
                        <li key={index}>
                            <h3 
                                dangerouslySetInnerHTML={{__html:item.title}}
                            />
                            <p 
                                dangerouslySetInnerHTML={{__html:item.content}}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}