import CardsWrapper from "./../../src/components/Utilities/Cards/CardsWrapper/CardsWrapper";
import Categories from "../../components/Pages/Projects/Categories/Categories";
import fs from "fs";
import HeroPage from "./../../components/Utilities/Hero/HeroPage/HeroPage";
import matter from "gray-matter";
import Layout from "../../components/Layout/Layout/Layout";
import ProjectCard from "../../src/components/Utilities/Cards/ProjectCard/ProjectCard";
import Search from "../../src/components/Utilities/Form/Search/Search";
import { iProject } from "../../src/ts/interface";
import { projects } from "../../data/pages/projects";
import { projectspage } from "./../../data/pages/projectspage";
import { typeProjectCategory } from "../../types/types";
import { useRouter } from "next/router";
import { useState } from "react";

interface iPage {
	articles: iProject[];
}

const Page = ({ articles }: iPage) => {
	const { pl } = projects;
	const [searchValue, setSearchValue] = useState<string>("");
	const { locale } = useRouter();
	const sortedArticles = articles.sort(
		(a, b) => new Date(b.release).getTime() - new Date(a.release).getTime()
	);

	const [currentCategory, setCurrentCategory] =
		useState<typeProjectCategory>("");
	return (
		<Layout
			image={projectspage.pl.main.seo.image}
			meta={{
				description: projectspage.pl.main.seo.meta.description,
				title: projectspage.pl.main.seo.meta.title,
			}}
			og={{
				description: projectspage.pl.main.seo.og.description,
				title: projectspage.pl.main.seo.og.title,
				type: "website",
			}}
			schema={{}}
			hero={
				<>
					<HeroPage
						content={projectspage.pl.main.content.hero.content}
						title={projectspage.pl.main.content.hero.title}
					/>
					<Search handle={setSearchValue} placeholder="Szukaj" />
				</>
			}
		>
			<main>
				<Categories
					categories={projectspage.pl.main.categories}
					current={currentCategory}
					handle={setCurrentCategory}
				/>
				<CardsWrapper variant="articles">
					{sortedArticles
						?.filter(
							(item: any) =>
								item.tags.includes(currentCategory.toLowerCase()) &&
								(item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
									item.excerpt
										.toLowerCase()
										.includes(searchValue.toLowerCase()))
						)
						.map(
							(
								{ category, excerpt, image, path, release, title },
								index: number
							) => (
								<ProjectCard
									excerpt={excerpt}
									image={image}
									key={title}
									category={category}
									path={path}
									release={release}
									title={title}
									variant="page"
								/>
							)
						)}
				</CardsWrapper>
			</main>
		</Layout>
	);
};
export default Page;

export const getStaticProps = ({ params }: { params: any }) => {
	const articlesDirectory = `${process.cwd()}/content/projects/pl`;
	const articlesFiles = fs
		.readdirSync(articlesDirectory)
		.filter((file) => file.endsWith(".mdx"));
	const articles = articlesFiles.map((file) => {
		const path = `${articlesDirectory}/${file}`;
		const contents = fs.readFileSync(path, "utf8");
		const { data } = matter(contents);
		return {
			slug: file.replace(/\.mdx$/, ""),
			release: `${data.release}`,
			excerpt: data.excerpt,
			image: data.image,
			title: data.title,
			category: data.category[0].name,
			path: `/projekty/${data.slug}`,
			tags: data.tags,
		};
	});

	return {
		props: {
			articles,
		},
	};
};
