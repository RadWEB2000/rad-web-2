import { ButtonPrimary } from "../../Buttons/ButtonPrimary/ButtonPrimary"
import { IntExcerptSectionContent } from "./interface"
import { Wrapper } from "./style"
export const ExcerptSectionContent = ({button,content,endContent,path,title}:IntExcerptSectionContent) => {
    return(
        <Wrapper>
            <section>
                <h2>{title}</h2>
                <p dangerouslySetInnerHTML={{__html:content.substring(0,endContent)}} />
            </section>
            <div>
                <ButtonPrimary
                    path={path}
                    title={button}
                />
            </div>
        </Wrapper>
    )
}