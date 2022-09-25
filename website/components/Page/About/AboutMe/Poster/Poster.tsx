import Image from "next/image"
import { IntPoster } from "./interface"
import { Wrapper } from "./style"
export const Poster = ({image,ratio,title}:IntPoster) => {
    return(
        <Wrapper ratio={ratio ? ratio : '4/3'}>
            <figure>
                <Image
                    alt={title}
                    layout='fill'
                    loading="lazy"
                    objectFit='cover'
                    objectPosition='center'
                    src={image}
                    title={title}
                />
            </figure>
        </Wrapper>
    )
}