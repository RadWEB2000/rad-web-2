"use client";
import { navigation } from "data/navigation";
import { useState } from "react";
import Submenu from "l_nav/Menu/BigMenu/Panel/Submenu";
import Item from "l_nav/Menu/Item";
import { tBigMenu } from "ts/types";
import styles from "l_nav/Menu/BigMenu/Panel/Panel.module.scss";
type tPanel = {
    menu:tBigMenu[];
}

export default function Panel(props:tPanel){
     const [currentSubmenu,setCurrentSubmenu] = useState<string>("");

    function changeSubmenuItems(filteredItem:string){
        const data = navigation.menu.big.filter((item) => item.value.toLowerCase().includes(filteredItem.toLowerCase()))[0];
        return data;
    }
    return(
           <menu className={styles.wrapper}>
            {
                currentSubmenu !== "" ?
                    <Submenu
                        back={{
                            handle:() => {
                                setCurrentSubmenu("");   
                            },
                            label:"Wróć"
                        }}
                        menu={changeSubmenuItems(currentSubmenu)}
                    /> :
                <div className={styles.main}>
                    <h3>Spis treści</h3>
                    <div>
                        {props.menu.map((item,index) => {
                            if(item.submenu){
                                return(
                                    <Item
                                        handleExpand={() => setCurrentSubmenu(item.value)}
                                        isExpand={false}
                                        theme="expand"
                                        label={item.label}
                                        uri={item.uri}
                                    />
                                )
                            }else{
                                return (
                                    <Item
                                        label={item.label}
                                        key={index}
                                        uri={item.uri}
                                        theme="regural"
                                    />
                                )
                            }
                        })}
                    </div>
                </div>
            }
        </menu>
    )
}