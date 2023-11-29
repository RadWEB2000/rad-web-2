import HeroButton from 'app/components/Utils/Buttons/HeroButton';
import { tImage } from 'ts/types';
import styles from 'views/HomePage/Hero/Hero.module.scss';
import Sheet from 'views/HomePage/Hero/Sheet';

type tHero = {
    background:tImage;
    layer:tImage;
    content:{
        title:string;
        slogan:string;
        buttons?:{
            label:string;
            uri:string;
        }[];
    }
}

export default function Hero(props:tHero){
    return(
        <div className={styles.wrapper}>
            {
                props.background &&
                <Sheet
                    className={styles.background}
                    image={props.background}
                />
                
            }
            {
                props.layer &&
                <Sheet
                    className={styles.layer}
                    image={props.layer}
                />
                
            }
            <div className={styles.container}>
                <header>
                    <h1 className={styles.title} dangerouslySetInnerHTML={{__html:props.content.title}} />
                    <h2 className={styles.slogan} dangerouslySetInnerHTML={{__html:props.content.slogan}} />
                    {props.content.buttons && 
                    <ul className={styles.buttons}>
                        {props.content.buttons.map((item,index) => {
                            return(
                                <HeroButton
                                    label={item.label}
                                    key={index}
                                    uri={item.uri}
                                />
                            )
                        })}

                    </ul>

                    }
                </header>
            </div>
        </div>
    )
}