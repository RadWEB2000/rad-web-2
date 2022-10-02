import { NextPage } from "next";
import Link from "next/link";
import { Menu } from "../../../components/Menu";
import { permissions } from "../../../data/permissions";

const Page:NextPage = () => {
    return(
        <>
            <Menu/>
            <h1>permissions</h1>
            <ul>
                {permissions.map(({path,status,title}) =>
                    <li>
                        <p>
                            {title}  - {status}          
                        </p>
                        <button>
                            <Link href={`/dashboard/permissions/${path}`}>
                                <a>
                                    wejdź
                                </a>
                            </Link>
                        </button>
                    </li>
                )}
            </ul>
        </>
    )
}
export default Page;