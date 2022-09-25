import { PersonCard } from "../../../Utilities/Cards/PersonCard/PersonCard"
import { IntPerson } from "./interface"
import { Wrapper } from "./style"

export const Person = ({buttons,content,heading,image,title}:IntPerson) => {
    return(
        <Wrapper>
            <h2>{heading}</h2>
            <PersonCard
                buttons={buttons}
                content={content}
                image={image}
                title={title}
            />
        </Wrapper>
    )
}