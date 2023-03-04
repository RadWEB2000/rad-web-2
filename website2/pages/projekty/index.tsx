import Layout from "../../components/Layout/Layout/Layout";
import Cards from "../../components/Pages/Projects/Cards/Cards";
import { projects } from "../../data/pages/projects";
import HeroPage from "./../../components/Utilities/Hero/HeroPage/HeroPage";
import { projectspage } from "./../../data/pages/projectspage";
import fs from "fs";
import matter from "gray-matter";
import ProjectCard from "../../components/Utilities/Cards/ProjectsCard/ProjectCard";
import { useRouter } from "next/router";
import { typeProjectCategory } from "../../types/types";
import SearchField from "../../components/Utilities/Forms/SearchField/SearchField";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Categories from "../../components/Pages/Projects/Categories/Categories";
interface IntArticle {
	category: {
		name: string;
		value: typeProjectCategory;
	}[];
	excerpt: string;
	image: string;
	release: string;
	slug: string;
	title: string;
	tags: typeProjectCategory[];
}

interface IntPage {
	articles: IntArticle[];
}

interface IntCategory {
	current: typeProjectCategory;
	handle: Dispatch<SetStateAction<typeProjectCategory>>;
	name: string;
	value: typeProjectCategory;
}

const Category = ({ current, handle, name, value }: IntCategory) => {
	const getValue = (
		current: typeProjectCategory,
		value: typeProjectCategory
	) => {
		if (current !== value) {
			return handle(value);
		} else if (current !== "") {
			return handle("");
		} else {
			return handle(value);
		}
	};

	return (
		<li>
			<button onClick={() => getValue(current, value)}>
				<p>{name}</p>
			</button>
		</li>
	);
};

const Page = ({ articles }: IntPage) => {
	const { pl } = projects;
	const [searchValue, setSearchValue] = useState<string>("");
	const { locale } = useRouter();
	console.log(articles[0].category);
	const sortedArticles = articles.sort(
		(a: any, b: any) =>
			new Date(b.release).getTime() - new Date(a.release).getTime()
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
					<SearchField handle={setSearchValue} placeholder="Szukaj" />
				</>
			}
		>
			<main>
				<Categories
					categories={projectspage.pl.main.categories}
					current={currentCategory}
					handle={setCurrentCategory}
				/>
				<Cards>
					{sortedArticles
						?.filter(
							(item: any) =>
								item.tags.includes(currentCategory.toLowerCase()) &&
								(item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
									item.excerpt
										.toLowerCase()
										.includes(searchValue.toLowerCase()))
						)
						.map(({ excerpt, image, slug, release, title }, index: number) => (
							<ProjectCard
								excerpt={excerpt}
								image={image}
								key={title}
								lang="pl"
								path={`/projekty/${slug}`}
								release={release}
								size="small"
								title={title}
							/>
						))}
				</Cards>
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
			tags: data.tags,
		};
	});

	return {
		props: {
			articles,
		},
	};
};
