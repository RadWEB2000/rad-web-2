import { getDate } from "@default/lib/functions/getDate";
import { tImage2 } from "@default/ts/types";
import Image from "next/image";
import Link from "next/link";
import { BsCalendar2Date } from "react-icons/bs";

type tHomeArticlePage = {
	author: {
		fullname: {
			firstname: string;
			lastname: string;
		};
		uri: string;
	};
	category: {
		name: string;
		uri: string;
	};
	date: string;
	image: tImage2;
	title: string;
	uri: string;
};

function HomeArticlePage(props: tHomeArticlePage) {
	const { author, category, date, image, title, uri } = props;
	const { day, month, year } = getDate({
		date: date,
		type: "short",
	});
	return (
		<li>
			<Link href={uri}>
				{image && (
					<div>
						<figure>
							<Image
								alt={image.altText}
								fill
								src={image.sourceUrl}
								style={{
									objectFit: "cover",
									objectPosition: "center",
								}}
								title={image.title}
							/>
						</figure>
					</div>
				)}
				<section>
					<header>
						<h3 dangerouslySetInnerHTML={{ __html: title }} />
					</header>
					<div>
						<Link
							href={author.uri}
						>{`${author.fullname.firstname} ${author.fullname.lastname}`}</Link>
					</div>
					<aside>
						<Link href={category.uri}>{category.name}</Link>
						<div>
							<i>
								<BsCalendar2Date />
							</i>
							<p>{`${day} ${month} ${year}`}</p>
						</div>
					</aside>
				</section>
			</Link>
		</li>
	);
}

type tBlogCard2 = {
	author: {
		fullname: {
			firstname: string;
			lastname: string;
		};
		uri: string;
	};
	category: {
		name: string;
		uri: string;
	};
	date: string;
	image: tImage2;
	title: string;
	uri: string;
	variant: "home" | "person" | "list" | "recommended" | "service";
};

export default function BlogCard2(props: tBlogCard2) {
	const { author, category, date, image, title, uri, variant } = props;

	if (variant === "home") {
		return (
			<HomeArticlePage
				author={author}
				category={category}
				date={date}
				image={image}
				title={title}
				uri={uri}
			/>
		);
	}
}
