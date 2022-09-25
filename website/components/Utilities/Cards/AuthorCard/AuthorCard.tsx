import Image from 'next/image';
import Link from 'next/link';
import { Wrapper } from './style';
export const AuthorCard = () => {
    return(
        <Wrapper>
            <section>
                <h2>
                    <Link href='/o-mnie'>
                        <a>
                            Radosław Adamczyk
                        </a>
                    </Link>
                </h2>
                <p>Specjalista ds. SEO i SEM, web/front-end developer</p>
            </section>
            <div>
                <figure>
                    <Image
                        alt='Radosław Adamczyk'
                        layout='fill'
                        loading='lazy'
                        objectFit='cover'
                        objectPosition='center'
                        src='/assets/images/wall.jpg'
                        quality={75}
                    />
                </figure>
            </div>
        </Wrapper>
    )
}