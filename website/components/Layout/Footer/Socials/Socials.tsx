import Link from "next/link";
import {RiFacebookFill, RiInstagramLine, RiTwitterFill} from 'react-icons/ri';
import { SiGithub, SiTiktok, SiYoutube } from "react-icons/si";
import { Wrapper } from "./style";
export const Socials = () => {
    return(
        <Wrapper>
            <li>
                <Link href="#">
                    <a>
                        <RiFacebookFill/>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <a>
                        <RiInstagramLine/>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <a>
                        <RiTwitterFill/>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <a>
                        <SiTiktok/>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <a>
                        <SiGithub/>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <a>
                        <SiYoutube/>
                    </a>
                </Link>
            </li>
        </Wrapper>
    )
}