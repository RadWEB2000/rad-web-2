import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import { getTime } from "../../../../../lib/functions/getTime";
import { IntBlogCardPage } from "./interface";
import { BlogCardPageStyles } from "./styles";
const BlogCardPage = ({
	content,
	image,
	path,
	time,
	title,
}: IntBlogCardPage): ReactElement => {
	const { day, month, year } = getTime(time);
	return (
		<BlogCardPageStyles title={`${title} - ${day} ${month} ${year}`}>
			<div className="image">
				<figure>
					<Image
						alt={`${title} - ${day} ${month} ${year}`}
						layout="fill"
						objectFit="cover"
						objectPosition="center"
						priority
						src={image}
						title={`${title} - ${day} ${month} ${year}`}
						quality={45}
					/>
				</figure>
			</div>
			<div className="content">
				<section>
					<p className="date">
						{month} {day}, {year}
					</p>
					<h3>
						<Link href={path}>
							<a rel="index follow">{title}</a>
						</Link>
					</h3>
					<p
						className="excerpt"
						dangerouslySetInnerHTML={{
							__html: content.substring(0, 150) + "...",
						}}
					/>
				</section>
			</div>
		</BlogCardPageStyles>
	);
};
export default BlogCardPage;
