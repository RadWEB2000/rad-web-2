"use client"
import BigMenu from "l_nav/Menu/BigMenu";
import { tBigMenu as tBigMenuData, tSocial} from "ts/types";
import Brand from "l_nav/Brand";
import Settings from "l_nav/Settings";
import SmallMenu from "./Menu/SmallMenu/SmallMenu";
import styles from "l_nav/Navigation.module.scss";
import { useContext } from "react";
import { LayoutContext } from "context/LayoutContext";

type tNavigation = {
    brand: {
        label:string;
        uri:string;
    }
     menu:{
        big:tBigMenuData[];
        small:{
            label:string;
            uri:string;
        }[]
     };
     settings: {
        menuButton:string;
     };
     socials:tSocial[];
}

export default function Navigation(props:tNavigation){
    const {menu:{isOpen}} = useContext(LayoutContext);
    return(
        <nav className={styles.wrapper} data-expand={isOpen}>
            <div className={styles.top}>
                <Brand {...props.brand} />
                <SmallMenu menu={props.menu.small} />
                <Settings
                    button={props.settings.menuButton}
                />
            </div>
            <div className={styles.bottom}>
                <BigMenu
                    menu={props.menu.big}
                    socials={props.socials}
                />
            </div>
        </nav>
    )
}