import Image from 'next/image';
import { SocialsShare } from '../../../../Utilities/Fragments/SocialsShare/SocialsShare';
import { IntHero } from './interface';
import { Wrapper } from './style';
export const Hero = ({image,job,title}:IntHero) => {
    
    return(
        <Wrapper>
            <div className="image">
                <figure>
                    <Image
                        alt={title}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        priority
                        src={image}
                        quality={95}
                    />
                </figure>
            </div>
            <div className="content">
                <section>
                    <h1>{title}</h1>
                    <h2 className="job">{job}</h2>
                    {/* <SocialsShare/> */}
                </section>
            </div>
        </Wrapper>
    )
}