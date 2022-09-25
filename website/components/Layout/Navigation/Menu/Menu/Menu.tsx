import { menu } from "../../../../../data/menu"
import { Item } from "../Item/Item";
import { Submenu } from "../Submenu/Submenu";
import { Wrapper } from "./style";
import { useContext } from 'react';
import { LayoutThemeContext } from "../../../../../context/LayoutThemeContext/LayoutThemeContext";
export const Menu = () => {
    const {nav} = menu;
    const {closeMenu} = useContext(LayoutThemeContext);
    return(
        <Wrapper>
            {nav.map(({path,submenu,title}) =>
                <>
                    {!submenu &&
                        <Item
                            handleMenu={() => console.log('#')}
                            path={path.pl}
                            title={title.pl}
                            variant='regular'
                        />
                    }
                    {submenu && 
                        <Submenu
                            handleMenu={() => console.log('#')} 
                            path={path.pl}
                            title={title.pl}
                            submenu={submenu}
                        />
                    }
                </>
            )}
        </Wrapper>
    )
}