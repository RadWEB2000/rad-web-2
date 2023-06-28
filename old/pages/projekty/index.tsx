import CardsWrapper from "./../../src/components/Utilities/Cards/CardsWrapper/CardsWrapper";
import Categories from "../../src/components/Pages/ProjectsPage/Categories/Categories";
import fs from "fs";
import HeroPage from "../../src/components/Utilities/Hero/HeroPage/HeroPage";
import matter from "gray-matter";
import Layout from "../../src/components/Layout/Layout/Layout";
import ProjectCard from "../../src/components/Utilities/Cards/ProjectCard/ProjectCard";
import Search from "../../src/components/Utilities/Form/Search/Search";
import { iProject, iProjectsNode } from "../../src/ts/interface";
import { tProjectCategory } from "../../src/ts/types";
import { useEffect, useState } from "react";
import { projectspage } from "./../../content/pages/projectspage";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../src/lib/queries/projects";

interface iPage {
	projects: iProject[];
}

const Page = ({ projects }: iPage) => {
	const { loading, error, data } = useQuery(GET_PROJECTS);
	console.log(data);

	const { seo, title, content, categories } = projectspage.pl;
	const [searchValue, setSearchValue] = useState<string>("");
	const sortedProjects = projects.sort(
		(a, b) => new Date(b.release).getTime() - new Date(a.release).getTime()
	);

	const [currentCategory, setCurrentCategory] = useState<tProjectCategory>("");

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :</p>;

	// Sprawdzanie, czy dane są dostępne
	if (!data || !data.projects || !data.projects.edges) {
		return <p>No data available</p>;
	}
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
					{data.projects.edges
						.slice()
						.sort(
							(a: any, b: any) =>
								new Date(b.node.date).getTime() -
								new Date(a.node.date).getTime()
						)
						.filter(({ node }: { node: any }) => {
							const isMatch = node.title
								.toLowerCase()
								.includes(searchValue.toLowerCase());
							return isMatch;
						})
						.map(({ node }: iProjectsNode, index: number) => {
							const { date, id, excerpt, featuredImage, title, uri } = node;
							console.log(featuredImage.node.sourceUrl);
							return (
								<ProjectCard
									excerpt={excerpt}
									image={featuredImage.node.sourceUrl}
									key={id}
									category={""}
									path={uri}
									release={date}
									title={title}
									variant="page"
								/>
							);
						})}
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
