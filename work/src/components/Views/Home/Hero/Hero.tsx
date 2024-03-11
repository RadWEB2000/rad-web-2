import Link from "next/link";
import { tHero } from "v/home/Hero/Hero.models";

export default function Hero({buttons,slogan,title,video}:tHero){
    return(
        <>
            <div>
                <header>
                    <hgroup>
                        <h1 dangerouslySetInnerHTML={{__html:title}} />
                        <h2 dangerouslySetInnerHTML={{__html:slogan}} />
                    </hgroup>
                </header>
                <figure>
                    <video
                        autoPlay
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
                <ul>
                    {buttons.map(({target,title,url }, index) => {
                        return(
                            <Link href={url} key={index} target={target}>
                                {title}
                            </Link>
                        )
                    })}
                </ul>
            }
        </>
    )
}