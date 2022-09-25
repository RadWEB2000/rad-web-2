import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { CertificateCard } from '../../../../Utilities/Cards/CertificateCard/CertificateCard';
import { WorkCard } from '../../../../Utilities/Cards/WorkCard/WorkCard';
import { IntCertificates, IntSectionCards, IntWorks } from './interface';
import { Wrapper } from './style';
const Certificates = ({certificates}:IntCertificates) => {
    return(
        <>
            {certificates.map(({content,path,title}) =>
                <CertificateCard
                    content={content}
                    key={path}
                    path={path}
                    title={title}
                />
            )}
        </>
    )
}
const Works = ({works}:IntWorks) => {
    return(
        <>
            {works.map(({content,position,time,title}) =>
                <WorkCard
                    content={content}
                    key={title}
                    position={position}
                    time={time}
                    title={title}
                />    
            )}
        </>
    )
}
export const SectionCards = ({certificates,title,works}:IntSectionCards) => {
    const [currentWidth,setCurrentWidth] = useState(0);
    const carouselWrapper = useRef<null|number|any>();
    useEffect(() => {
        setCurrentWidth(carouselWrapper.current.scrollWidth - carouselWrapper.current.offsetWidth);
    },[])
    return(
        <Wrapper>
            <h2>{title}</h2>
            <motion.div
                 ref={carouselWrapper}
            >
                <motion.ul
                    drag='x'
                    whileTap={{
                        cursor:'grab'
                    }}
                    dragConstraints={{
                        left:-currentWidth,
                        right:0,
                    }}
                >
                    {certificates && <Certificates certificates={certificates} />}                
                    {works && <Works works={works} />}   
                </motion.ul>
            </motion.div>
        </Wrapper>
    )
}