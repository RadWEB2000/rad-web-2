"use client"
import { useState } from 'react';

import Item from 'l_nav/Menu/Item';
import styles from 'l_nav/Menu/Submenu/Submenu.module.scss';

import Dropdown from './Dropdown';

type tSubmenu = {
    label:string;
    uri:string;
    submenu: {
        label:string;
        uri:string;
        submenu?:{
            label:string;
        uri:string;
        }[]
    }[];
}

export default function Submenu(props:tSubmenu){
    const [isOpenSubmenu,setIsOpenSubmenu] = useState(false);
    return(
        <li className={styles.wrapper} onMouseLeave={() => setIsOpenSubmenu(false)}>
            <Item
                handleToggleOpen={() => setIsOpenSubmenu(!isOpenSubmenu)}
                label={props.label}
                isExpand={isOpenSubmenu}
                theme="expand"
                uri={props.uri}
            />
            {
                isOpenSubmenu &&
                <ul>
                    {props.submenu.map((item,index) => {
                        if(item.submenu){
                            return(
                               <Dropdown
                                key={index}
                                label={item.label}
                                submenu={item.submenu}
                                uri={item.uri}
                               />
                            )
                        }else{
                            return (
                                <Item
                                    closeSubmenu={() => setIsOpenSubmenu(false)}
                                    key={index}
                                    label={item.label}
                                    uri={item.uri}
                                    theme='submenu'
                                />
                            )
                        }
                    })}
                </ul>
            }
        </li>
    )
}