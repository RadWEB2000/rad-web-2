"use client"

import { useContext } from 'react';

import { LayoutContext } from 'context/LayoutContext';
import styles from 'utils/Buttons/MenuButton/MenuButton.module.scss';

type tMenuButton = {
    label:string;
}

export default function MenuButton(props:tMenuButton){
    const {menu:{isOpen,toggle}} = useContext(LayoutContext)
    return(
        <div
            className={styles.wrapper}
        >
            <label htmlFor="menuButton">{props.label}</label>
            <button data-expand={isOpen} id="menuButton" name="menuButton" onClick={toggle}>
                <span/>
                <span/>
            </button>
        </div>
    )

}