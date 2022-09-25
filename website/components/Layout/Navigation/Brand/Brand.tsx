import Link from "next/link"
import { Wrapper } from "./style"
export const Brand = () => {
    return(
        <Wrapper>
            <Link href='/'>
                <a>
                    RadWEB
                </a>
            </Link>
        </Wrapper>
    )
}