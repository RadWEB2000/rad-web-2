import { Brand } from "../Brand/Brand"
import { Menu } from "../Menu/Menu/Menu"
import {useContext} from 'react';
import { Settings } from "../Settings/Settings/Settings"
import { Wrapper } from "./style"
import { LayoutThemeContext } from '../../../../context/LayoutThemeContext/LayoutThemeContext';
export const Navigation = () => {
    const {isMobile,isOpenMenu} = useContext(LayoutThemeContext)
    return(
        <Wrapper>
            <Brand/>
            {
                isOpenMenu &&
                <Menu/>
            }
            {
                isMobile &&
                <Settings/>
            }
        </Wrapper>
    )
}