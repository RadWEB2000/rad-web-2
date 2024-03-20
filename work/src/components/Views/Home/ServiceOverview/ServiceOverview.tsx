import Image from "next/image";
import {tServiceOverview} from "v/home/ServiceOverview/ServiceOverview.models";
import css from "v/home/ServiceOverview/ServiceOverview.module.scss";

export default function ServiceOverview({cards,title}:tServiceOverview) {
    return (
        <section className={css.wrapper} >
            <h3 className={css.title}  dangerouslySetInnerHTML={{__html:title}} />
            <ul className={css.cards} >
                {cards.map(({icon,title}, index) => {
                    return (
                        <li className={css.card}  key={index}>
                            <picture className={css.icon} >
                                <Image
                                    alt={icon.altText}
                                    fill
                                    loading="lazy"
                                    src={icon.sourceUrl}
                                    style={{
                                        objectFit: 'contain',
                                        objectPosition: 'center',
                                    }}
                                    title={icon.title}
                                    quality={80}
                                />
                            </picture>
                            <h4 className={css.label}  dangerouslySetInnerHTML={{__html:title}} />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}