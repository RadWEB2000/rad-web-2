import Image from "next/image"
import { ButtonPrimary } from "../../Buttons/ButtonPrimary/ButtonPrimary"
import { IntPersonCard } from "./interface"
import { Wrapper } from "./style"
export const PersonCard = ({buttons,content,image,title}:IntPersonCard) => {
    return(
        <Wrapper>
            <figure>
                <Image
                    alt={title}
                    layout='fill'
                    objectFit="cover"
                    objectPosition='center'
                    loading='lazy'
                    src={image}
                    quality={90}
                />
            </figure>
            <section>
                <h2>{title}</h2>
                <p 
                    dangerouslySetInnerHTML={{__html:content.substring(0,450)}} 
                />
                <ul>
                    {buttons.map(({path,title},key) =>
                        <ButtonPrimary
                            key={key}
                            path={path}
                            title={title}
                        />
                    )}
                </ul>
            </section>
        </Wrapper>
    )
}