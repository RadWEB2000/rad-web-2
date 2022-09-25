import { IntMovie } from "./interface"
import { Wrapper } from "./style"
export const Movie = ({url}:IntMovie) => {
    return(
        <Wrapper>
            <figure>
                {
                    url.includes('youtube') ?
                    <iframe 
                        src={url} 
                    /> :
                    <video 
                        controls
                        loop
                        src={url}
                    />
                }
            </figure>
        </Wrapper>
    )
}
