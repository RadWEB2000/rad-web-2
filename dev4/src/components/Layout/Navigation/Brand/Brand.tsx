import Link from "next/link";

type tBrand = {
    label:string;
    uri:string;
}

export default function Brand(props:tBrand){
    return(
        <div>
            <Link href={props.uri}>
                {props.label}
            </Link>
        </div>
    )
}