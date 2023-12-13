import { MenuButton } from "utils/Buttons";

type tSettings = {
    button:string;
}

export default function Settings(props:tSettings){
    return(
        <div>
            <MenuButton label={props.button} />
        </div>
    )
}