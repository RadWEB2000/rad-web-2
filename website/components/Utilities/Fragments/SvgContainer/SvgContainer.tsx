import { IntSvgContainer } from "./interface"
import { Wrapper } from "./style"
export const SvgContainer = ({icon}:IntSvgContainer) => {
    return(
        <Wrapper>
            {icon}
        </Wrapper>
    )
}