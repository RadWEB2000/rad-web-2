"use client";
import Link from "next/link";
import { useState } from "react"
import {AnimatePresence} from "framer-motion";

export default function OverflowMenu(){
    const menu = [
        {}
    ];
    const [isPrimaryLevel,setIsPrimaryLevel] = useState(false);
    const [isOpenDropdown,setIsOpenDropdown] = useState(false);

    return(
        <menu>
            {   isPrimaryLevel &&
                <>
                    <div>
                        <button>return</button>
                    </div>
                    <h4>BLOG</h4>
                </>
            }
            <ul>
                {
                    menu.map((item,index) => {
                        if(isPrimaryLevel){
                           if(item.submenu){
                                return(
                                    <li>
                                        <Link href="#">
                                            Element Głównego Menu
                                        </Link>
                                        <button>more</button>
                                    </li>
                                )
                           }else{
                                return(
                                    <li>
                                        <Link href="#">
                                            Element Głównego Menu
                                        </Link>
                                    </li>
                                )
                           }
                        }else{
                            if(item.submenu){
                                return(
                                    <div>
                                        <li>
                                            <Link href="#">
                                                Element Głównego Menu
                                            </Link>
                                            <button>more</button>
                                        </li>
                                        {isOpenDropdown &&
                                            <AnimatePresence>
                                                <ul>
                                                    {submenu?.map((item,index) => {
                                                        return(
                                                            <li>
                                                                <Link href="#">
                                                                    Element Głównego Menu
                                                                </Link>
                                                            </li>
                                                        )                           
                                                    })}
                                                </ul>
                                            </AnimatePresence>
                                        }   
                                    </div>
                                )
                            }else{
                                return(
                                    <li>
                                        <Link href="#">
                                            Element Głównego Menu
                                        </Link>
                                    </li>
                                )
                            }
                        }
                    })
                }
            </ul>
        </menu>
    )
}