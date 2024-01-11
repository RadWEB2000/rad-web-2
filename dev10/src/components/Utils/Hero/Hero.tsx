import { LinkButton } from "utils/Buttons";
import css from "utils/Hero/Hero.module.scss";

type tHero = {
    title:string;
} & (
    {
        theme:"home"
    } & tHome 
)

type tHome = {
    buttons?:{
        label:string;
        uri:string;
    }[];
    movie:string;
    slogan:string;
    title:string;
}

function Home(props:tHome){
    return(
        <div className={css.home__wrapper}>
                <video
                    autoPlay
                    className={css.home__video}
                    loop
                    muted
                >
                    <source src={props.movie} type="video/webm" />
                </video>
            <header className={css.home__content}>
                <h1 className={css.home__title} dangerouslySetInnerHTML={{__html:props.title}} />
                <h2 className={css.home__slogan} dangerouslySetInnerHTML={{__html:props.slogan}} />
                {
                    props.buttons &&
                    <ul className={css.home__buttons}>
                        {props.buttons.map((item,index) => {
                            return(
                                <LinkButton
                                    {...item}
                                    key={index}
                                    theme="tertiary"
                                />
                            )
                        })}
                    </ul>
                }
            </header>
        </div>
    )
}

export default function Hero(props:tHero){
    if(props.theme === "home") {
        return <Home {...props} />
    }
}