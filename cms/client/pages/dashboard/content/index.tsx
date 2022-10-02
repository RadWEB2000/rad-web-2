import { NextPage } from "next";
import Link from "next/link";
import { Menu } from "../../../components/Menu";
import { posts } from "../../../data/posts";

const Page:NextPage = () => {
    return(
        <>
            <Menu/>
            <h1>content</h1>
            <ul>
                {posts.map(({path,publish,title},key) => 
                    <li>
                        <button>
                            <Link href={`/dashboard/content/${path}`}>
                                <a>
                                    wejdź
                                </a>
                            </Link>
                        </button>
                        <b>{title}</b>
                        <p>{publish.time}</p>
                        <button>
                            usuń
                        </button>
                    </li>
                )}
            </ul>
            <button>
                <Link href='/dashboard/content/new'>
                    <a>
                        nowy
                    </a>
                </Link>
            </button>
        </>
    )
}
export default Page;