"use client"

import { useContext } from 'react';

import { LayoutContext } from 'context/LayoutContext';
import styles from 'utils/Buttons/MenuButton/MenuButton.module.scss';

export default function MenuButton(){
    const {menu:{isOpen,toggle}} = useContext(LayoutContext)
    return(
        <div
            className={styles.wrapper}
        >
            <label htmlFor="menuButton">MENU</label>
            <button data-expand={isOpen} id="menuButton" name="menuButton" onClick={toggle}>
                <span/>
                <span/>
            </button>
        </div>
    )

}