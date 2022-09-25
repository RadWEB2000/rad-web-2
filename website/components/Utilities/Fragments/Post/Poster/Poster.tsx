import Image from 'next/image';
import { IntPoster } from './interface';
import { Wrapper } from './style';
export const Poster = ({image,title}:IntPoster) => {
    return(
        <Wrapper>
            <Image
                alt={title}
                loading='lazy'
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                src={image}
                title={title}
                quality={65}
            />
        </Wrapper>
    )
}