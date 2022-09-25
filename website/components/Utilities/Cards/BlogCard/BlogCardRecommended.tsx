import Link from "next/link"
import { ReactElement } from "react"
import { Author } from "./Author"
import { IntBlogCardRecommended } from "./interface"
import { BlogCardRecommendedWrapper } from "./style"
export const BlogCardRecommended = ({author,path,title}:IntBlogCardRecommended):ReactElement => {
    return(
        <BlogCardRecommendedWrapper>
            <Link href={path}>
                <a>
                    <h3>{title}</h3>
                </a>
            </Link>
            <Author
                isRecommended={true}
                path={author.path}
                title={author.title}
            />
        </BlogCardRecommendedWrapper>
    )
}