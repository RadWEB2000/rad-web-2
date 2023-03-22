import Image from "next/image";
import Link from "next/link";
import { getDate } from "./../../../../lib/functions/getDate";
import { ReactElement } from "react";

interface iNewsItem {
	button: string;
	excerpt: string;
	image: string;
	path: string;
	release: string | Date;
	title: string;
}

export interface iNews {
	items: iNewsItem[];
	path: string;
	title: string;
}

const NewsItem = ({
	button,
	excerpt,
	image,
	path,
	release,
	title,
}: iNewsItem): ReactElement => {
	return (
		<li>
			<figure>
				{/* <Image
					alt=""
					fill
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
					src={image}
				/> */}
			</figure>
			<div>
				<h3>{title}</h3>
				<p>{`${getDate(release).day}/${getDate(release).month}/${
					getDate(release).year
				}`}</p>
				<p
					dangerouslySetInnerHTML={{
						__html: excerpt.substring(0, 100) + "...",
					}}
				/>
				<Link href={path}>{button}</Link>
			</div>
		</li>
	);
};

const News = ({ items, path, title }: iNews): ReactElement => {
	return (
		<div>
			<ul>
				{items
					.slice(0, 3)
					.map(({ button, excerpt, image, path, release, title }) => (
						<NewsItem
							button={button}
							excerpt={excerpt}
							image={image}
							key={`${path} - ${title} - ${release}`}
							path={path}
							release={release}
							title={title}
						/>
					))}
			</ul>
			<Link href={path}>{title}</Link>
		</div>
	);
};

export default News;
