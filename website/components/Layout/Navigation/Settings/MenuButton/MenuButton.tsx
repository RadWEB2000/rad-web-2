import { useState, useContext } from 'react';
import { LayoutThemeContext } from '../../../../../context/LayoutThemeContext/LayoutThemeContext';
import { Wrapper } from './style';
export const MenuButton = () => {
    const {handleMenu,isOpenMenu} = useContext(LayoutThemeContext);
    return(
        <Wrapper onClick={handleMenu} isOpen={isOpenMenu}>
            <span/>
            <span/>
            <span/>
        </Wrapper>
    )
}