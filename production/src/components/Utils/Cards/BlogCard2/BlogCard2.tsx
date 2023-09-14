import { getDate } from "@default/lib/functions/getDate";
import { tImage2 } from "@default/ts/types";
import Image from "next/image";
import Link from "next/link";
import { BsCalendar2Date } from "react-icons/bs";
import styles from "@default/components/Utils/Cards/BlogCard2/BlogCard.module.scss";

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
		<li className={styles.home_article_page}>
			<Link className={styles.box} href={uri}>
				<div className={styles.image_box}>
					<figure className={styles.image}>
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
				<section className={styles.content}>
					<header className={styles.title_box}>
						<h3
							className={styles.title}
							dangerouslySetInnerHTML={{ __html: title }}
						/>
					</header>
					<div className={styles.author_box}>
						<Link
							className={styles.author}
							href={author.uri}
						>{`${author.fullname.firstname} ${author.fullname.lastname}`}</Link>
					</div>
					<aside className={styles.details}>
						<Link className={styles.category} href={category.uri}>
							{category.name}
						</Link>
						<div className={styles.release}>
							<i className={styles.release_icon}>
								<BsCalendar2Date />
							</i>
							<p className={styles.release_date}>{`${day} ${month} ${year}`}</p>
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
