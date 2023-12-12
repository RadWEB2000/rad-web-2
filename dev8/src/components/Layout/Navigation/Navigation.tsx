"use client"
import { useContext } from 'react';

import { LayoutContext } from 'context/LayoutContext';
import Brand from 'l_nav/Brand';
import Menu from 'l_nav/Menu';
import styles from 'l_nav/Navigation.module.scss';
import MenuButton from 'utils/Buttons/MenuButton';

type tNavigation = {
    brand:{
        label:string;
        uri:string;
    };
    menu: {
        label:string;
        uri:string;
        submenu?:{
            label:string;
            uri:string;
            submenu?:{
                label:string;
                uri:string;
            }[]
        }[];
    }[]
}

export default  function Navigation(props:tNavigation) {
    const {menu:{isOpen}} = useContext(LayoutContext);
    return (
            <nav
                className={styles.wrapper}
                data-open={isOpen}
            >   
                <div className={styles.brand}>
                <Brand
                    label={props.brand.label}
                    uri={props.brand.uri}
                />
                </div>
                <div className={styles.menu}>
                <Menu
                    menu={props.menu}
                />
                </div>
                <div className={styles.settings}><MenuButton/></div>
            </nav>
    );
}
