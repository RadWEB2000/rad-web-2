import BigMenu from "l_nav/Menu/BigMenu";
import { tBigMenu as tBigMenuData} from "ts/types";
type tNavigation = {
     menu:{
        big:tBigMenuData[];
     };
}

export default function Navigation(props:tNavigation){
    return(
        <>
            <nav>
                asd
                <div>
                    <BigMenu
                        menu={props.menu.big}
                    />
                </div>
            </nav>
        </>
    )
}