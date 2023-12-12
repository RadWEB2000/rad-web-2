"use client";
import { navigation } from "data/navigation";
import Link from "next/link";
import { useState } from "react";
import Item from "l_nav/Menu/Item";
import Panel from "./Panel";


export default function BigMenu(){

    const [currentSubmenu,setCurrentSubmenu] = useState<string>("blog");
    const [indexOfCurrentMenuItem,setIndexOfCurrentMenuItem] = useState<null|number>(null);
console.log(indexOfCurrentMenuItem)
    function getSubmenuElements(category:string,parentIndex?:number|null,){
        if(parentIndex){
            const parentCategory =  navigation.menu.big.filter((item,index) => index === parentIndex)[0];
            const childCategory = parentCategory.submenu && parentCategory.submenu.filter((item) => item.value === category && item.submenu);
            return childCategory;

        }else{
            const data = navigation.menu.big.filter((item) => item.value.toLowerCase().includes(category.toLowerCase()));
            console.log(data)
            return data[0];    
        }
    }

    getSubmenuElements("programming",2);

    function changeSubmenuItems(filteredItem:string){
        const data = navigation.menu.big.filter((item) => item.value.toLowerCase().includes(filteredItem.toLowerCase()));
        return data[0];
    }


    
    return(
        <div
            style={{
                color:"red",
                fontSize:"2rem"
            }}
        >
        <menu>
            <Panel/>
        </menu>
        <div></div>
        <ul></ul>
        </div>
    )
}