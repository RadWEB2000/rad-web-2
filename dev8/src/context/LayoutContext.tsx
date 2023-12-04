"use client";

import {
  createContext,
  useState,
} from 'react';

type tLayoutContext = {
    menu : {
        isOpen:boolean;
        close:() => void;
        toggle: () => void;
    }
}

type tLayoutProvider = {
    children:React.ReactNode;
}

export const LayoutContext = createContext<tLayoutContext>({
    menu:{
        isOpen:false,
        close:() => {},
        toggle:() => {}
    }
})

export default function LayoutProvider(props:tLayoutProvider){
    const [isOpenMenu,setIsOpenMenu] = useState(false);
    return(
        <LayoutContext.Provider
            value={{
                menu: {
                    close:() => setIsOpenMenu(false),
                    isOpen:isOpenMenu,
                    toggle:() => setIsOpenMenu(!isOpenMenu),
                }
            }}
        >
            {props.children}
        </LayoutContext.Provider>
    )
}