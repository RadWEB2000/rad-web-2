import { Author } from "../Author/Author";
import { Menu } from "../Menu/Menu";
import { Socials } from "../Socials/Socials";
import { Wrapper } from "./style";
export const Footer = () => {
    return(
        <Wrapper>
            <div className='info'>
                <Menu/>
                <Socials/>
            </div>
            <Author/>
        </Wrapper>
    )
}