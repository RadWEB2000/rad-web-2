import HeroButton from "utils/Buttons/HeroButton";
import styles from "views/HomePage/Hero/Hero.module.scss";
type tHero = {
    background?: string;
    content: {
        title: string;
        slogan: string;
        buttons?: {
            label: string;
            uri: string;
        }[];
    };
};

export default function Hero(props: tHero) {
    return (
        <div className={styles.wrapper}>
            <figure className={styles.movie}>
                <video autoPlay loop muted>
                    <source src="/assets/background.webm" type="video/webm" />
                </video>
            </figure>
            <header className={styles.container}>
                <h1
                    className={styles.title}
                    dangerouslySetInnerHTML={{ __html: props.content.title }}
                />
                <h2
                    className={styles.slogan}
                    dangerouslySetInnerHTML={{ __html: props.content.slogan }}
                />
                {props.content.buttons && (
                    <ul className={styles.buttons}>
                        {props.content.buttons.map((item, index) => {
                            return (
                                <HeroButton
                                    label={item.label}
                                    key={index}
                                    uri={item.uri}
                                />
                            );
                        })}
                    </ul>
                )}
            </header>
        </div>
    );
}
