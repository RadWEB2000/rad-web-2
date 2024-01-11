import MenuButton from "utils/Buttons/MenuButton/MenuButton";
import Link from "next/link";
import Brand from "./Brand/Brand";
import ToolbarMenu from "./Menu/ToolbarMenu/ToolbarMenu";

export default function Navigation(){
    return(
        <nav>
            <div>
                <Brand
                    label="RadWEB"
                    uri="#"
                />
                <ToolbarMenu
                    menu={[
                        {
                            label:"Start",  
                            uri:"#"
                        },
                        {
                            label:"O nas",  
                            uri:"#"
                        },
                        {
                            label:"Blog",  
                            uri:"#"
                        },
                        {
                            label:"Usługi",  
                            uri:"#"
                        },
                        {
                            label:"Projekty",  
                            uri:"#"
                        },
                        {
                            label:"Kontakt",  
                            uri:"#"
                        },
                    ]}
                />
                
                <div>
                    <MenuButton
                        label="MENU"
                    />
                </div>
            </div>
            <div>
                <menu>
                    <li>
                        <Link href="#">
                        
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        
                        </Link>
                    </li>
                </menu>
            </div>
        </nav>
    )
}