import Layout from "../../../components/Layout/Layout/Layout";
import SearchField from "../../../components/Utilities/Forms/SearchField/SearchField";
import HeroPage from "../../../components/Utilities/Hero/HeroPage/HeroPage";
import { useState } from "react";
import BlogCardBlogPage from "../../../components/Utilities/Cards/BlogCards/BlogCardBlogPage/BlogCardBlogPage";
import Cards from "../../../components/Pages/Blog/Cards/Cards";
import { blogpage } from "../../../data/pages/blogpage";
import fs from "fs";
import matter from "gray-matter";

interface IntArticle {
	slug: string;
	category: string;
	release: string;
	excerpt: string;
	image: string;
	title: string;
	lang: string;
}
interface IntPage {
	articles: IntArticle[];
	page: {
		seo: {
			image: string;
			meta: {
				description: string;
				title: string;
			};
			og: {
				description: string;
				title: string;
			};
		};
		path: string;
		hero: {
			content: string;
			title: string;
		};
	};
}

const Page = ({ page, articles }: IntPage) => {
	const [searchValue, setSearchValue] = useState("");
	console.log(articles);
	return (
		<Layout
			image={page?.seo.image}
			meta={{
				description: page?.seo.meta.description,
				title: page?.seo.meta.title,
			}}
			og={{
				description: page?.seo.og.description,
				title: page?.seo.og.title,
				type: "website",
			}}
			schema={{}}
			hero={
				<>
					<HeroPage content={page?.hero.content} title={page?.hero.title} />
					<SearchField handle={setSearchValue} placeholder={`Szukaj`} />
				</>
			}
		>
			<main>
				<Cards>
					{articles
						?.filter((item: any) =>
							item.category.toLowerCase().includes("programowanie")
						)
						?.filter((item: any) =>
							item.title.toLowerCase().includes(searchValue.toLowerCase())
						)
						.sort(
							(a: IntArticle, b: IntArticle) =>
								new Date(b.release).getTime() - new Date(a.release).getTime()
						)
						.map((article: any) => {
							const { category, excerpt, image, release, title, slug } =
								article;
							return (
								<BlogCardBlogPage
									category={category}
									date={release}
									excerpt={excerpt}
									image={image}
									key={title}
									path={`/blog/${category}/${slug}`}
									title={title}
								/>
							);
						})}
				</Cards>
			</main>
		</Layout>
	);
};
export default Page;
export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	};
};
export const getStaticProps = ({ params }: { params: any }) => {
	const getSubpage = blogpage.pl.subpages.filter((item: any) => {
		return item.slug === params.category;
	});

	const articlesDirectory = `${process.cwd()}/content/articles`;
	const articlesFiles = fs
		.readdirSync(articlesDirectory)
		.filter((file) => file.endsWith(".mdx"));
	const articles = articlesFiles.map((file) => {
		const path = `${articlesDirectory}/${file}`;
		const contents = fs.readFileSync(path, "utf8");
		const { data } = matter(contents);
		return {
			slug: file.replace(/\.mdx$/, ""),
			category: data.category,
			release: `${data.release}`,
			excerpt: data.excerpt,
			image: data.image,
			title: data.title,
			lang: data.lang,
		};
	});

	return {
		props: {
			page: {
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
			articles,
		},
	};
};
