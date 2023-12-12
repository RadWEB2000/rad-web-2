"use client";
import { navigation } from "data/navigation";
import { useState } from "react";
import Submenu from "l_nav/Menu/BigMenu/Panel/Submenu";
import Item from "l_nav/Menu/Item";

type tChangeSubmenuItems = {
    label:string;
        submenu:{
            label:string;
            uri:string;
            submenu?:{
                label:string;
                uri:string;
            }[]
        }[]
}

export default function Panel(){
     const [currentSubmenu,setCurrentSubmenu] = useState<string>("");

    function changeSubmenuItems(filteredItem:string){
        const data:tChangeSubmenuItems = navigation.menu.big.filter((item) => item.value.toLowerCase().includes(filteredItem.toLowerCase()))[0];
        return data;
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
            }
        </menu>
    )
}