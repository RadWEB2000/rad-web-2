import { ReactElement } from "react"
import { IntWorkCard } from "./interface"
import { Wrapper } from "./style"
export const WorkCard = ({content,position,time,title}:IntWorkCard):ReactElement => {
    return(
        <Wrapper>
            <div>
                <h3>{title}</h3>
            </div>
            <section>
                <p className="time">{time.start} - {time.end}</p>
                <p className="position">{position}</p>
                <p className="content" dangerouslySetInnerHTML={{__html:content.substring(0,200)}} />
            </section>
        </Wrapper>
    )
}