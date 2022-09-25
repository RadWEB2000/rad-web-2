import Link from "next/link"
import { IntButtonCard } from "./interface"
import { Wrapper } from "./style"
export const ButtonCard = ({download=false,isPrimary,isSecondary,path,title}:IntButtonCard) => {
    return(
        <Wrapper
            isPrimary={isPrimary}
            isSecondary={isSecondary}
            whileTap={{
                scale:.95
            }}
        >
            {
                path ?
                (
                    download ?
                    <Link href={path}>
                        <a download>
                            {title}
                        </a>
                    </Link> :
                    <Link href={path}>
                        <a>
                            {title}
                        </a>
                    </Link>
                ) :
                <p>
                    {title}
                </p>
            }
        </Wrapper>
    )
}