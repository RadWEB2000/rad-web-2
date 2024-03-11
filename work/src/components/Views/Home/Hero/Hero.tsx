import PrimaryButton from "buttons/PrimaryButton";
import Link from "next/link";
import { tHero } from "v/home/Hero/Hero.models";
import css from "v/home/Hero/Hero.module.scss";

export default function Hero({buttons,slogan,title,video}:tHero){
    return(
        <>
            <div className={css.wrapper} >
                <header className={css.container} >
                    <hgroup className={css.headings__box} >
                        <h1 className={css.title}  dangerouslySetInnerHTML={{__html:title}} />
                        <h2 className={css.slogan}  dangerouslySetInnerHTML={{__html:slogan}} />
                    </hgroup>
                </header>
                <figure className={css.video__box} >
                    <video
                        autoPlay
                        className={css.video} 
                        loop
                        muted
                    >
                        <source 
                            type="video/webm"
                            src={video}
                        />
                    </video>
                </figure>
            </div>
            {
                buttons &&
                <ul className={css.buttons} >
                    {buttons.map((item, index) => {
                        return <PrimaryButton
                            {...item}
                            rel="index follow"
                            key={index}
                        />
                    })}
                </ul>
            }
        </>
    )
}