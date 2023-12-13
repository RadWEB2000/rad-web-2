import Link from "next/link";

type tSmallMenu = {
    menu:{
        label:string;
        uri:string;
    }[];
}

export default function SmallMenu(props:tSmallMenu){
    return(
        <menu>
            {props.menu.map((item,index) => {
                return(
                    <li key={item.label}>
                        <Link href={item.uri}>
                            {item.label}
                        </Link>
                    </li>
                )
            })}
        </menu>
    )
}