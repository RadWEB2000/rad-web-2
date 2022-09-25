import Image from 'next/image';
import { ButtonPrimary } from '../../../Utilities/Buttons/ButtonPrimary/ButtonPrimary';
import { IntCard } from './interface';
import { Wrapper } from './style';
export const Card = ({button,content,image,path,title}:IntCard) => {
    return(
        <Wrapper>
            <figure>
                <div>
                    <Image
                        alt={title}
                        layout='fill'
                        loading='lazy'
                        objectFit='cover'
                        objectPosition='center'
                        src={image}
                        quality={50}
                    />
                </div>
            </figure>
            <section>
                <h2>{title}</h2>
                <p>{content}</p>
                <ButtonPrimary
                    title={button}
                    path={path}
                />
            </section>
        </Wrapper>
    )
}