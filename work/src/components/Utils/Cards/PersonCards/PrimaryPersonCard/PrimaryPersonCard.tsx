import Image from "next/image";
import Link from "next/link";
import { tPrimaryPersonCard } from "cards/PersonCards/PrimaryPersonCard/PrimaryPersonCard.models";

export default function PrimaryPersonCard({fullname,image,overview,works}:tPrimaryPersonCard){
    return (
        <li>
            <figure>
                <picture
                    style={{
                        display:"none"
                    }}
                >
<Image
											alt={image.altText}
											fill
											loading="lazy"
											src={image.sourceUrl}
											style={{
												objectFit: 'cover',
												objectPosition: 'center',
												filter:"brightness(105%)",
											}}
											title={image.title}
											quality={80}
										/>
                </picture>
            </figure>
            <section>
                <h3 dangerouslySetInnerHTML={{__html:fullname}} />
                <h4 dangerouslySetInnerHTML={{__html:works}} />
                <p dangerouslySetInnerHTML={{__html:overview}} />
                <Link href="">
                    więcej
                </Link>
            </section>
        </li>
    )
}