import styles from 'l_nav/Brand/Brand.module.scss';
import Link from 'next/link';

type tBrand = {
    label:string;
    uri:string;
}

export default function Brand(props:tBrand){
    return(
        <Link className={styles.wrapper} dangerouslySetInnerHTML={{__html:props.label}} href={props.uri}/>
    )
}