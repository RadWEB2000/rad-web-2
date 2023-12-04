"use client"
import { useState } from 'react';

import Item from 'l_nav/Menu/Item';

type tDropdown = {
    label:string;
    uri:string;
    submenu:{
        label:string;
        uri:string;
    }[]
}

export default function Dropdown(props:tDropdown){
    const [isOpenDropdown,setIsOpenDropdown] = useState(false);

    return(
        <li>
        <Item
            handleToggleOpen={() => setIsOpenDropdown(!isOpenDropdown)}
            label={props.label}
            isExpand={isOpenDropdown}
            uri={props.uri}
            theme="dropdown-expand"
        />
        {
            isOpenDropdown &&
            <ul>
                {props.submenu.map((item,index) => {
                    return(
                        <Item
                        key={index}
                        label={item.label}
                        uri={item.uri}
                        theme='dropdown-submenu'
                    />
                    )
                })}
            </ul>
        }
    </li>
    )
}