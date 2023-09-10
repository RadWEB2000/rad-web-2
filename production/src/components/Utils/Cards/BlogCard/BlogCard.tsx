import { tImage2 } from "@default/ts/types";
import HomeBlogCard from "./HomeBlogCard/HomeBlogCard";
import Author from "./../../../Page/PostPage/Author/Author";
import RecommendedBlogCard from "./RecommendedBlogCard/RecommendedBlogCard";
import RegularBlogCard from "./RegularBlogCard/RegularBlogCard";

type tBlogCard = {
	date: string;
	image: tImage2;
	title: string;
	uri: string;
} & (
	| ({
			author: {
				firstname: string;
				lastname: string;
			};
			category: {
				name: string;
				uri: string;
			};
	  } & (
			| {
					theme: "regular";
					excerpt: string;
			  }
			| {
					theme: "home";
					status: string;
			  }
	  ))
	| {
			theme: "recommended";
			excerpt: string;
	  }
);

export default function BlogCard(props: tBlogCard) {
	const { date, image, theme, title, uri } = props;
	if (theme === "home") {
		const { author, category, status } = props;
		return (
			<HomeBlogCard
				author={author}
				category={category}
				date={date}
				image={image}
				status={status}
				title={title}
				uri={uri}
			/>
		);
	} else if (theme === "recommended") {
		const { excerpt } = props;
		return (
			<RecommendedBlogCard
				date={date}
				excerpt={excerpt}
				image={image}
				title={title}
				uri={uri}
			/>
		);
	} else if (theme === "regular") {
		const { author, category, excerpt } = props;
		return (
			<RegularBlogCard
				author={author}
				category={category}
				date={date}
				excerpt={excerpt}
				image={image}
				title={title}
				uri={uri}
			/>
		);
	}
}
