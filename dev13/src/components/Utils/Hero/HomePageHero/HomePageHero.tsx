import {tHomePageHero} from "utils/Hero/HomePageHero/HomePageHero.models";
import { PrimaryButton, SocialButton } from "utils/Buttons";
import css from "utils/Hero/HomePageHero/HomePageHero.module.scss";

export default function HomePageHero(props:tHomePageHero):JSX.Element{
    return(
        <div className={css.wrapper}>
            <header className={css.content__box}>
                <hgroup className={css.headings}>
                    <h1 className={css.title} dangerouslySetInnerHTML={{__html:props.title}} />
                    <h2 className={css.slogan} dangerouslySetInnerHTML={{__html:props.slogan}}  />
                </hgroup>
                <ul className={css.buttons}>
                    {props.buttons.map((item,index) => {
                        return (
                            <PrimaryButton
                                href={item.button.url}
                                key={index}
                                label={item.button.title}
                                rel="index follow"
                                target={item.button.target}
                                theme="light"
                            />
                        )
                    })}
                </ul>
            </header>
            <figure className={css.media__box}>
                <ul className={css.socials}>
                    {props.socials.map((item,index) => {
                        return (
                            <SocialButton
                                key={index}
                                link={item.link}
                                theme="hero"
                            />
                        )
                    })}
                </ul>
                <video
                    autoPlay
                    className={css.video}
                    loop    
                    muted
                >
                    <source 
                        src={props.video}
                    />
                </video>
            </figure>
        </div>
    )
}