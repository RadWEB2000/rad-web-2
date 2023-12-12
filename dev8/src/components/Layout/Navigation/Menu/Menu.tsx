import Item from 'l_nav/Menu/Item';
import styles from 'l_nav/Menu/Menu.module.scss';
import Submenu from 'l_nav/Menu/Submenu';

type tMenu = {
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

export default function Menu(props:tMenu){
    return(
        <menu className={styles.wrapper}>
            {props.menu?.map((item,index) => {
                if(item.submenu){
                    return(
                        <Submenu
                        key={index}
                            label={item.label}
                            submenu={item.submenu}
                            uri={item.uri}
                        /> 
                    )
                }else{
                    return(
                        <Item
                        key={index}
                        label={item.label}
                        uri={item.uri}
                    theme="regural"
                />
                    )
                }
            })}

        </menu>
    )
}