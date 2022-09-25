import { IntCards } from "./interface"
import { Wrapper } from "./style"
export const Cards = ({children}:IntCards) => {
    return(
        <Wrapper>
            <ul>
                {children}
            </ul>
        </Wrapper>
    )
}