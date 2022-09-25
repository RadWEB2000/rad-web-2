import { IntRodo } from "./interface"
import { ReactElement } from 'react';
import { Wrapper } from "./style";
import { VscCheck } from "react-icons/vsc";
import { AnimatePresence,motion } from "framer-motion";
export const Rodo = ({content,handle,value}:IntRodo):ReactElement => {
    return(
        <Wrapper check={value}>
            <input 
                checked={value}
                id="rodo" 
                onClick={handle}
                name="rodo" 
                type="checkbox" 
            />
            
            <label 
                htmlFor="rodo"
            >
                <div>
                    {
                        value &&
                        <AnimatePresence>
                            <motion.span
                                initial={{opacity:0,visibility:'hidden'}}
                                animate={{opacity:1,visibility:'visible'}}
                                exit={{opacity:0,visibility:'hidden'}}
                            >
                                <VscCheck/>
                            </motion.span>
                        </AnimatePresence>
                    }
                </div>
                <p
                    dangerouslySetInnerHTML={{__html:content}}                   
                />
            </label>
        </Wrapper>
    )
}