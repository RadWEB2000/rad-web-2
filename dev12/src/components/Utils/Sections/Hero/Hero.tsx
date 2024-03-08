import Image from "next/image";
import Link from "next/link";
import { tHero, tHomePageHero } from "utils/Sections/Hero/Hero.models";
import css from "./Hero.module.scss"
import getSocialIcon from "app/lib/functions/getSocialIcon";
import { Button } from "utils/Buttons";


function HomePageHero(props:tHomePageHero){
    return(
        <div className={css.home__wrapper}>
            <header className={css.home__box}>
                <hgroup  className={css.home__box__headings}>
                    <h1  className={css.home__box__title} dangerouslySetInnerHTML={{__html:props.title}} />
                    <h2  className={css.home__box__slogan}  dangerouslySetInnerHTML={{__html:props.slogan}} />
                </hgroup>
                <ul  className={css.home__box__buttons} >
                    {props.buttons.map((item,index) => {
                        return (
                          <Button
                            label={item.button.title}
                            mode="light"
                            rel="index follow"
                            target={item.button.target}
                            theme="primary"
                            uri={item.button.url}
                            key={item.button.title + index}
                          />
                        )
                    })}
                </ul>
            </header>
            <div className={css.home__media}>
                <ul className={css.home__media__socials}>
                    {props.socials.map((item,index) => {
                        const icon = getSocialIcon({
                            url:item.link
                        })
                        return(
                            <Link  className={css.home__media__social} href={item.link} key={index} rel="nofollow">
                               {icon}
                            </Link>
                        )
                    })}
                </ul>
                <video
                    autoPlay
                    className={css.home__media__video}
                    loop
                    muted
                >
                    <source 
                        src={props.video}
                    />
                </video>
            </div>
        </div>
    )
}

export default function Hero(props:tHero) {
    if(props.theme === "home"){
        return <HomePageHero {...props} />
    }
}