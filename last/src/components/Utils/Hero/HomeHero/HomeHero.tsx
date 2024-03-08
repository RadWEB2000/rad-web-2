import { tHomeHero } from "u_hero/HomeHero/HomeHero.models";
import PrimaryButton from "u_buttons/PrimaryButton";
import css from "u_hero/HomeHero/HomeHero.module.scss";

export default function HomeHero({buttons,slogan,socials,title,video}:tHomeHero){
    return (
        <>
            <header className={css.wrapper} >
                <hgroup className={css.headings}>
                    <h1 className={css.title} dangerouslySetInnerHTML={{__html:title}} />
                    <h2 className={css.slogan} dangerouslySetInnerHTML={{__html:slogan}} />
                </hgroup>
                {
                    buttons &&
                    <ul className={css.buttons}>
                        {buttons.map((item,index) => {
                            return <PrimaryButton
                                {...item}
                                icon="right"
                                rel="index follow"
                                key={index}
                            />
                        })}
                    </ul>
                }
            
            </header>
            <figure
                className={css.movie__box}
            >
            <video
                autoPlay
                className={css.movie}
                controlsList="nodownload noremoteplayback noplaybackrate pictureinpicture"
                disablePictureInPicture
                disableRemotePlayback
                loop
                muted
                preload="metadata"
            >
                <source
                    src={video}
                />
            </video>
            </figure>
        </>
    )
}