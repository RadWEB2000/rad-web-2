"use client"
import { useContext } from 'react';

import { LayoutContext } from 'context/LayoutContext';
import styles from 'utils/Buttons/MenuButton/MenuButton.module.scss';

export default function MenuButton(){
    const {menu:{isOpen,toggle}} = useContext(LayoutContext)
    return(
        <button
            className={styles.wrapper}
            data-active={isOpen}
            onClick={toggle}
        >
            <span className={styles.line}/>
            <span  className={styles.line}/>
            <span  className={styles.line}/>
        </button>
    )
}