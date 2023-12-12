
import Panel from "./Panel";
import { tBigMenu as tBigMenuData} from "ts/types";
type tBigMenu = {
    menu:tBigMenuData[];
}

export default function BigMenu(props:tBigMenu){
    return(
        <div
            style={{
                fontSize:"2rem"
            }}
        >
        <menu>
            <Panel
                menu={props.menu}
            />
        </menu>
        <div></div>
        <ul></ul>
        </div>
    )
}