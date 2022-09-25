import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Item } from "../Item/Item"
import { IntSubmenu } from "./interface"
import { Wrapper } from "./style"
export const Submenu = ({handleMenu,path,title,submenu}:IntSubmenu) => {
    const [isOpen,setIsOpen] = useState(false)
    return(
        <Wrapper onMouseLeave={() => setIsOpen(false)}>
            <Item
                handleButton={() => setIsOpen(!isOpen)}
                handleMenu={handleMenu}
                path={path}
                title={title}
                variant="expand"
            />
            {
                isOpen &&
                <AnimatePresence>
                    <motion.ul
                        initial={{opacity:0,visibility:'hidden'}}
                        animate={{opacity:1,visibility:'visible'}}
                        exit={{opacity:0,visibility:'hidden'}}
                    >
                        {submenu.map(({path,title},key) => 
                            <Item
                                key={key}
                                handleMenu={handleMenu}
                                path={path.pl}
                                title={title.pl}
                                variant="submenu"
                            />
                        )}
                    </motion.ul>
                </AnimatePresence>
            }
        </Wrapper>
    )
}