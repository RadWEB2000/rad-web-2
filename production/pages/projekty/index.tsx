import Layout from "@default/src/components/Layout/Layout";
import { RegularProjectCard } from "@default/src/components/Utils/Cards/Projects/RegularProjectCard/RegularProjectCard";
import { Search } from "@default/src/components/Utils/Forms/Search/Search";
import { HeroPage } from "@default/src/components/Utils/Hero/HeroPage/HeroPage";
import { ProjectCardsWrapper } from "@default/src/components/Utils/Wrappers/ProjectCardsWrapper/ProjectCardsWrapper";
import { useState } from "react";
import fs from "fs";
import matter from "gray-matter";
import projectsPage from "@default/content/pl/pages/projekty";
import { Seo } from "@default/src/components/Layout/Seo/Seo";

interface iPage {
	articles: {
		image: string;
		release: string;
		title: string;
		category: {
			name: string;
		}[];
		excerpt: string;
		slug: string;
	}[];
}

const Page = ({ articles }: iPage) => {
	const [searchValue, setSearchValue] = useState("");
	const { hero, seo } = projectsPage;
	return (
		<Layout>
			<Seo
				image={seo.image}
				metaDescription={seo.metaDescription}
				metaTitle={seo.metaTitle}
				openGraphDescription={seo.openGraphDescription}
				openGraphTitle={seo.openGraphTitle}
				website={seo.website}
				articleSection={seo.articleSection}
				canonical={seo.canonical}
				modifiedTime={seo.modifiedTime}
				publishedTime={seo.publishedTime}
				schema={seo.schema}
			/>
			<HeroPage content={hero.content} image={hero.image} title={hero.title} />
			<Search handle={setSearchValue} placeholder="Szukaj" />
			<ProjectCardsWrapper>
				{articles
					?.filter((item: any) =>
						item.title.toLowerCase().includes(searchValue.toLowerCase())
					)
					.map(({ category, title, image, excerpt, slug }) => {
						console.log(category);
						return (
							<RegularProjectCard
								categories={category}
								excerpt={excerpt}
								key={title}
								image={{
									alt: "",
									src: image,
									title: "",
								}}
								title={title}
								uri={slug}
							/>
						);
					})}
			</ProjectCardsWrapper>
		</Layout>
	);
};

export default Page;

export const getStaticPaths = async () => {
	const personsDirectory = `${process.cwd()}/content/pl/projects`;
	const filenames = fs.readdirSync(personsDirectory);

	const paths = filenames.map((filename) => ({
		params: { slug: filename.replace(".mdx", "") },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async () => {
	const articlesDirectory: string = `${process.cwd()}/content/pl/projects`;
	const articlesFiles = fs
		.readdirSync(articlesDirectory)
		.filter((file) => file.endsWith(".mdx"));
	const articles = articlesFiles.map((file) => {
		const contents = fs.readFileSync(`${articlesDirectory}/${file}`, "utf8");
		const { data } = matter(contents);
		return {
			release: `${data.release}`,
			excerpt: data.excerpt,
			image: data.image,
			title: data.title,
			category: data.category,
			slug: `/projekty/${data.slug}`,
		};
	});
	return {
		props: {
			articles,
		},
	};
};
