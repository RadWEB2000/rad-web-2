import Link from "next/link";

type tToolbarMenu = {
    menu:{
        label:string;
        uri:string;
    }[];
}

export default function ToolbarMenu( props:tToolbarMenu ){
    return(
        <menu>
            {props.menu.map((item,index) => {
                return(
                    <li key={`${item.label}-${index + 1}`}>
                        <Link href={item.uri}>
                            {item.label}
                        </Link>
                    </li>
                )
            })}
        </menu>
    )
}