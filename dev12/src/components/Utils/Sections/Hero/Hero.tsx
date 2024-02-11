import { tHero, tHomePageHero } from "u_sections/Hero/Hero.models";
import css from "u_sections/Hero/Hero.module.scss";
import { Buttons } from "utils/Buttons";


function HomePageHero(props:tHomePageHero){
    return(
        <header className={css.home__page__wrapper}>
            <section className={css.home__page__content}>
                <h1 className={css.home__page__content__title} dangerouslySetInnerHTML={{__html:props.title}} />
                <h2 className={css.home__page__content__slogan} dangerouslySetInnerHTML={{__html:props.slogan}}  />
                {
                    props.buttons &&
                    <ul className={css.home__page__content__buttons}>
                        {props.buttons.map((item,index) => {
                            return <Buttons
                                key={`${item.button.title}-${index}`}
                                label={item.button.title}
                                doubleArrows
                                target={item.button.target}
                                theme="primary"
                                uri={item.button.url}
                            />
                        })}
                    </ul>
                }
            </section>
            <video autoPlay muted loop   className={css.home__page__movie} src="/assets/movies/background.webm"/>
        </header>
    )
}

export default function Hero(props:tHero){
    if(props.theme === "home") return <HomePageHero {...props} />
}