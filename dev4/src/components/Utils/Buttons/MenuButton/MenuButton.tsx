type tMenuButton = {
    label:string;
}

export default function MenuButton(props:tMenuButton){
    return(
        <div>
            <label htmlFor="menu_button"></label>
            <button id="menu_button" name="menu_button">
                {props.label}
            </button>
        </div>
    )
}