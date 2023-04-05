import CardsWrapper from "./../../src/components/Utilities/Cards/CardsWrapper/CardsWrapper";
import Categories from "../../src/components/Pages/ProjectsPage/Categories/Categories";
import fs from "fs";
import HeroPage from "../../src/components/Utilities/Hero/HeroPage/HeroPage";
import matter from "gray-matter";
import Layout from "../../src/components/Layout/Layout/Layout";
import ProjectCard from "../../src/components/Utilities/Cards/ProjectCard/ProjectCard";
import Search from "../../src/components/Utilities/Form/Search/Search";
import { iProject } from "../../src/ts/interface";
import { tProjectCategory } from "../../src/ts/types";
import { useState } from "react";
import { projectspage } from "./../../content/pages/projectspage";

interface iPage {
	projects: iProject[];
}

const Page = ({ projects }: iPage) => {
	const { seo, title, content, categories } = projectspage.pl;
	const [searchValue, setSearchValue] = useState<string>("");
	const sortedProjects = projects.sort(
		(a, b) => new Date(b.release).getTime() - new Date(a.release).getTime()
	);

	const [currentCategory, setCurrentCategory] = useState<tProjectCategory>("");
	return (
		<Layout
			image={seo.image}
			meta={{
				description: seo.meta.description,
				title: seo.meta.title,
			}}
			og={{
				description: seo.og.description,
				title: seo.og.title,
				type: "website",
			}}
			schema={{}}
			hero={
				<>
					<HeroPage content={content} title={title} />
					<Search handle={setSearchValue} placeholder="Szukaj" />
				</>
			}
		>
			<main>
				<Categories
					categories={categories}
					current={currentCategory}
					handle={setCurrentCategory}
				/>
				<CardsWrapper variant="articles">
					{sortedProjects
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
	const projectsDirectory = `${process.cwd()}/content/projects/pl`;
	const projectsFiles = fs
		.readdirSync(projectsDirectory)
		.filter((f) => f.endsWith(".mdx"));
	const projects = projectsFiles.map((f) => {
		const path = `${projectsDirectory}/${f}`;
		const contents = fs.readFileSync(path, "utf8");
		const { data } = matter(contents);
		return {
			slug: f.replace(/\.mdx$/, ""),
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
			projects,
		},
	};
};
