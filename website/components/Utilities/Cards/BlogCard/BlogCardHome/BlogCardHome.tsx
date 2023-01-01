import Image from "next/image";
import Link from "next/link";
import { getTime } from "./../../../../../lib/functions/getTime";
import { IntBlogCardHome } from "./interface";
import { ReactElement } from "react";
import { BlogCardHomeStyles } from "./style";

const BlogCardHome = ({
	excerpt,
	image,
	isMain = false,
	path,
	time,
	title,
}: IntBlogCardHome): ReactElement => {
	const { day, month, year } = getTime(time);
	return (
		<BlogCardHomeStyles data-main={isMain}>
			<div className="image">
				<figure>
					<Image
						alt={`${title} - ${day} ${month} ${year}`}
						layout="fill"
						objectFit="cover"
						objectPosition="center"
						src={image}
						title={`${title} - ${day} ${month} ${year}`}
					/>
				</figure>
			</div>
			<section className="content">
				<p className="date">
					{month} {day}, {year}
				</p>
				<h3 className="title">
					<Link href={path}>
						<a rel="index follow">{title}</a>
					</Link>
				</h3>
				<p className="excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
			</section>
		</BlogCardHomeStyles>
	);
};
export default BlogCardHome;
