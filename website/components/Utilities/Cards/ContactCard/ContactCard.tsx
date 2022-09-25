import Image from "next/image"
import Link from "next/link"
import { IntContactCard } from "./interface"
import { Wrapper } from "./style"
export const ContactCard = ({email,image,phone,title}:IntContactCard) => {
    return(
        <Wrapper>
            <div>
                <figure>
                    <Image
                        alt={title}
                        layout='fill'
                        objectFit="cover"
                        objectPosition='center'
                        src={image}
                        quality={45}
                    />
                </figure>
            </div>
            <section>
                <h3>{title}</h3>
                {
                    email &&
                    <li>
                        <Link href={`mailto:${email}`}>
                            <a>
                                {email}
                            </a>
                        </Link>
                    </li>
                }
                {
                    phone &&
                    <li>
                        <Link href={`tel:${phone}`}>
                            <a>
                                {phone}
                            </a>
                        </Link>
                    </li>
                }
            </section>
        </Wrapper>
    )
}