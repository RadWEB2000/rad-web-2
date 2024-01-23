import { PersonCard } from "utils/Cards";
import { LinkButton } from "utils/Buttons";
import { tImage } from "ts/types";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

type tAbout = {
    title:string;
    content:string;
    button: {
        label:string;
        uri:string;
    };
    cards : {
        button:string;
        content:string;
        image:tImage;
        title:string;
        uri:string;
        work:string;
    }[];
}

export default function About(props:tAbout){
    let indexCard = 0;
    return(
        <div>
            <section>
                <h2 dangerouslySetInnerHTML={{__html:props.title}} />
                <p dangerouslySetInnerHTML={{__html:props.content}} />
                <LinkButton
                    theme="secondary"
                    filled
                    iconify
                    label={props.button.label}
                    uri={props.button.uri}
                    mode="light"
                />
            </section>
            {
                props.cards &&
                <div>
                    <button>
                        <FaAnglesLeft/>
                    </button>
                    <ul>
                        <PersonCard
                            button={props.cards[indexCard].button}
                            content={props.cards[indexCard].content}
                            image={props.cards[indexCard].image}
                            theme="primary"
                            title={props.cards[indexCard].title}
                            uri={props.cards[indexCard].work}
                            work={props.cards[indexCard].work}
                            />
                    </ul>
                    <button>
                        <FaAnglesRight/>
                    </button>
                </div>
            }
        </div>  
    )
}