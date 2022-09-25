import { Wrapper } from "./style";

export const Author = () => {
    const year = new Date().getFullYear();
    return(
        <Wrapper>
            RadWEB &copy; 2021 - {year}
        </Wrapper>
    )
}