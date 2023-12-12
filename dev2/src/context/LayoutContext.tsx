"use client";

import Navigation from 'layout/Navigation';
import {
  createContext,
  useState,
} from 'react';
import { tBigMenu as tBigMenuData} from "ts/types";
type tLayoutContext = {
    menu : {
        isOpen:boolean;
        close:() => void;
        toggle: () => void;
    }
}

type tLayoutProvider = {
    children:React.ReactNode;
    menu:{
        big:tBigMenuData[];
     };
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
            <Navigation menu={{
                big:props.menu.big
            }} />
            {props.children}
        </LayoutContext.Provider>
    )
}