"use client";

import { createContext, useState } from "react";

type tLayoutContext = {
    menu: {
        close:() => void;
        isOpen:boolean;
        toggle:() => void;
    }
}

type tLayoutProvider = {
    children:React.ReactNode;
}

export const LayoutContext = createContext<tLayoutContext>({
    menu: {
        close:() => {},
        isOpen:false,
        toggle:() => {}
    }
})

export default function LayoutProvider(props:tLayoutProvider){
    const [isOpenMenu,setIsOpenMenu] = useState<boolean>(false);
    return(
        <LayoutContext.Provider
            value={{
                menu:{
                    close:() => setIsOpenMenu(false),
                    isOpen:isOpenMenu,
                    toggle:() => setIsOpenMenu(!isOpenMenu)
                }
            }}
        >
            {props.children}
        </LayoutContext.Provider>
    )
}