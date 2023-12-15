"use client";
import { navigation } from "data/navigation";
import { useState } from "react";
import Submenu from "l_nav/Menu/BigMenu/Panel/Submenu";
import Item from "l_nav/Menu/Item";
import { tBigMenu } from "ts/types";
import styles from "l_nav/Menu/BigMenu/Panel/Panel.module.scss";
import {motion} from "framer-motion";

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
                    <motion.h3
                        animate={{
                            x:0
                        }}
                        initial={{
                            x:-200
                        }}
                    >Spis treści</motion.h3>
                    <motion.div
                         animate={{
                          y:0
                        }}
                        initial={{
                            y:-40
                        }}
                    >
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
                    </motion.div>
                </div>
            }
        </menu>
    )
}