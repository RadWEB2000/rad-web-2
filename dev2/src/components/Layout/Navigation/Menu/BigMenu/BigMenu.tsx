
import Panel from "l_nav/Menu/BigMenu/Panel";
import { tBigMenu as tBigMenuData, tSocial} from "ts/types";
import Socials from "l_nav/Menu/BigMenu/Socials";
import { BlogMenuCard } from "utils/Cards/BlogCards";
import { articles } from "data/articles";
import styles from "l_nav/Menu/BigMenu/BigMenu.module.scss";

type tBigMenu = {
    menu:tBigMenuData[];
    socials:tSocial[];
}

export default function BigMenu(props:tBigMenu){
    return(
        <div
            className={styles.wrapper}
        >
        <div className={styles.menu}>
            <Panel
                menu={props.menu}
            />
        </div>
        <div className={styles.articles}>
            {articles.map((item,index) => {
                return(
                    <BlogMenuCard
                        category={item.category}
                        image={item.image}
                        key={item.title}
                        release={item.release}
                        title={item.title}
                        uri={item.uri}
                    />
                )
            })}
            
        </div>
        <div className={styles.socials}>
            <Socials socials={props.socials} />
        </div>
        </div>
    )
}