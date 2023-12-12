"use client";
import { navigation } from "data/navigation";
import { useState } from "react";
import Link from "next/link";
import Submenu from "l_nav/Menu/BigMenu/Panel/Submenu";
import Item from "l_nav/Menu/Item";

export default function Panel(){
     const [currentSubmenu,setCurrentSubmenu] = useState<string>("blog");
   

    function changeSubmenuItems(filteredItem:string){
        const data = navigation.menu.big.filter((item) => item.value.toLowerCase().includes(filteredItem.toLowerCase()));
        return data[0];
    }
    return(
           <menu>
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
            <div>
                <h3>Spis treści</h3>
            {navigation.menu.big.map((item,index) => {
                if(item.submenu){
                    return(
                        <Item
                            handle={() => changeSubmenuItems(item.value)}
                            theme="expand"
                            isExpand={false}
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
            }
        </menu>
    )
}