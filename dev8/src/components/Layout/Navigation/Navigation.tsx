import Brand from 'l_nav/Brand';
import Menu from 'l_nav/Menu';
import MenuButton from 'utils/Buttons/MenuButton';

type tNavigation = {
    brand:{
        label:string;
        uri:string;
    };
    menu: {
        label:string;
        uri:string;
        submenu?:{
            label:string;
            uri:string;
            submenu?:{
                label:string;
                uri:string;
            }[]
        }[];
    }[]
}

export default async function Navigation(props:tNavigation) {
    return (
        <>
            <nav
                style={{
                    backgroundColor: "hsla(0,100%,0%,.28)",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "5rem",
                    zIndex: 999,
                }}
            >   
                <Brand
                    label={props.brand.label}
                    uri={props.brand.uri}
                />
                <Menu
                    menu={props.menu}
                />
                <MenuButton/>
            </nav>
        </>
    );
}
