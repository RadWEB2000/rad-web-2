import { tHero, tHomePageHero } from "u_sections/Hero/Hero.models";
import css from "u_sections/Hero/Hero.module.scss";


function HomePageHero(props:tHomePageHero){
    return(
        <header className={css.home__page__wrapper}>
            <section className={css.home__page__content}>
                <h1 className={css.home__page__content__title} dangerouslySetInnerHTML={{__html:props.title}} />
                <h2 className={css.home__page__content__slogan} dangerouslySetInnerHTML={{__html:props.slogan}}  />
                <ul className={css.home__page__content__buttons}>

                </ul>
            </section>
            <video autoPlay muted loop   className={css.home__page__movie} src="/assets/movies/background.webm"/>
        </header>
    )
}

export default function Hero(props:tHero){
    if(props.theme === "home") return <HomePageHero {...props} />
}