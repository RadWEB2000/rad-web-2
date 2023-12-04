"use client"
import { useContext } from 'react';

import { LayoutContext } from 'context/LayoutContext';

export default function MenuButton(){
    const {menu:{isOpen,toggle}} = useContext(LayoutContext)
    return(
        <button
            data-open={isOpen}
            onClick={toggle}
        >
            <span/>
            <span/>
            <span/>
        </button>
    )
}