import { menu } from "../../../../data/menu"
import Link from 'next/link';
import { ElementWrapper, MenuWrapper } from "./style";
const Element = ({path,title}:{path:string,title:string}) => {
    return(
        <ElementWrapper>
            <Link href={path}>
                <a>
                    {title}
                </a>
            </Link>
        </ElementWrapper>
    )
}
export const Menu = () => {
    const {footer} = menu;
    return(
        <MenuWrapper>
            {footer.map(({path,title}) =>
                <Element key={title.pl} path={path.pl} title={title.pl}/>
            )}
        </MenuWrapper>
    )
}