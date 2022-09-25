import { IntContent } from "./interface"
import { Wrapper } from "./style"
export const Content = ({children,title}:IntContent) => {
    return(
        <Wrapper>
            {title && <h2>{title}</h2> }
            <p>{children}</p>
        </Wrapper>
    )
}