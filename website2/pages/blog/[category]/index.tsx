import Layout from "../../../components/Layout/Layout/Layout";
import SearchField from "../../../components/Utilities/Forms/SearchField/SearchField";
import HeroPage from "../../../components/Utilities/Hero/HeroPage/HeroPage";
import { useState } from "react";
import BlogCardBlogPage from "../../../components/Utilities/Cards/BlogCards/BlogCardBlogPage/BlogCardBlogPage";
import { posts } from "../../../data/pages/posts";
import Cards from "../../../components/Pages/Blog/Cards/Cards";
import { blogpage } from "../../../data/pages/blogpage";
import { getStructuredDataWebsite } from "../../../lib/getStructuredData";
import fs from "fs";
import path from "path";
const Page = ({
	seo,
	hero,
	path = "",
}: {
	seo: any;
	hero: any;
	path?: string;
}) => {
	const [searchValue, setSearchValue] = useState("");
	return (
		<Layout
			image={seo?.image}
			meta={{
				description: seo?.meta.description,
				title: seo?.meta.title,
			}}
			og={{
				description: seo?.og.description,
				title: seo?.og.title,
				type: "website",
			}}
			schema={getStructuredDataWebsite({ url: path })}
			hero={
				<>
					<HeroPage content={hero?.content} title={hero?.title} />
					<SearchField handle={setSearchValue} placeholder={`Szukaj`} />
				</>
			}
		>
			<main>
				<Cards>
					{posts.pl.articles
						// .filter((item) =>
						// 	item.category.toLowerCase().includes("programowanie")
						// )
						.filter(
							(item) =>
								item.hero.date
									.toLowerCase()
									.includes(searchValue.toLowerCase()) ||
								item.hero.excerpt
									.toLowerCase()
									.includes(searchValue.toLowerCase()) ||
								item.title.toLowerCase().includes(searchValue.toLowerCase())
						)
						.map(({ hero, path }) => (
							<BlogCardBlogPage
								category={``}
								date={hero.date}
								excerpt={hero.excerpt}
								image={hero.image}
								key={hero.title}
								path={path}
								title={hero.title}
							/>
						))}
				</Cards>
			</main>
		</Layout>
	);
};
export default Page;

export const getStaticPaths = async () => {
	const postsDirectory = path.join(process.cwd(), "content", "articles1");
	console.log("posts directory", postsDirectory);
	return {
		paths: [],
		fallback: true,
	};
};

export const getStaticProps = ({ params }: { params: any }) => {
	const getSubpage = blogpage.pl.subpages.filter((item: any) => {
		return item.slug === params.category;
	});
	return {
		props: {
			seo: {
				image: getSubpage[0].seo.image,
				meta: {
					description: getSubpage[0].seo.meta.description,
					title: getSubpage[0].seo.meta.title,
				},
				og: {
					description: getSubpage[0].seo.og.description,
					title: getSubpage[0].seo.og.title,
				},
			},
			path: getSubpage[0].path,
			hero: {
				content: getSubpage[0].content.hero.content,
				title: getSubpage[0].content.hero.title,
			},
		},
	};
};
