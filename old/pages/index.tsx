import AboutSection from "../src/components/Pages/HomePage/AboutSection/AboutSection";
import BlogSection from "../src/components/Pages/HomePage/BlogSection/BlogSection";
import fs from "fs";
import HeroHome from "../src/components/Utilities/Hero/HeroHome/HeroHome";
import Layout from "../src/components/Layout/Layout/Layout";
import matter from "gray-matter";
import ProjectsSection from "../src/components/Pages/HomePage/ProjectsSection/ProjectsSection";
import { homepage } from "./../content/pages/homepage";
import { tLang, tProjectCategory } from "../src/ts/types";
import { getStructuredDataOrganization } from "../src/lib/functions/getStructuredData";
import { useEffect } from "react";

interface iPage {
	articles: {
		category: string;
		excerpt: string;
		image: string;
		lang: tLang;
		release: string | Date;
		title: string;
	}[];
	persons: {
		cities: string;
		email: string;
		firstname: string;
		image: string;
		jobs: string;
		lastname: string;
		path: string;
		phone: string;
	}[];
	projects: {
		category: tProjectCategory;
		excerpt: string;
		image: string;
		path: string;
		release: string | Date;
		stack: tProjectCategory[];
		title: string;
	}[];
}

const Page = ({ articles, persons, projects }: iPage) => {
	const { seo, hero, sections } = homepage.pl;

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
			schema={getStructuredDataOrganization()}
			hero={
				<HeroHome
					buttons={hero.buttons}
					cards={hero.services.cards}
					content={hero.content}
					title={hero.title}
				/>
			}
		>
			<main className="homepage mainHP hp">
				<BlogSection
					button={{
						path: sections.blog.path,
						title: sections.blog.button,
					}}
					cards={articles}
					content={sections.blog.content}
					title={sections.blog.title}
				/>
				<AboutSection
					button={{
						path: sections.about_us.path,
						title: sections.about_us.button,
					}}
					cards={persons}
					content={sections.about_us.content}
					title={sections.about_us.title}
				/>
				<ProjectsSection
					title={sections.projects.title}
					content={sections.projects.content}
					button={{
						path: sections.projects.path,
						title: sections.projects.button,
					}}
					cards={projects}
				/>
			</main>
		</Layout>
	);
};
export default Page;

export const getStaticProps = ({ params }: { params: any }) => {
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

	const personsDirectory = `${process.cwd()}/content/persons/pl`;
	const personsFiles = fs
		.readdirSync(personsDirectory)
		.filter((f) => f.endsWith(".mdx"));
	const persons = personsFiles.map((item) => {
		const path = `${personsDirectory}/${item}`;
		const content = fs.readFileSync(path, "utf8");
		const { data } = matter(content);
		return {
			cities: data.cities,
			email: data.email,
			firstname: data.firstname,
			image: data.image,
			jobs: data.jobs,
			lastname: data.lastname,
			path: data.path,
			phone: data.phone,
		};
	});

	const projectsDirectory = `${process.cwd()}/content/projects/pl`;
	const projectsFiles = fs
		.readdirSync(projectsDirectory)
		.filter((file) => file.endsWith(".mdx"));
	const projects = projectsFiles.map((file) => {
		const path = `${projectsDirectory}/${file}`;
		const contents = fs.readFileSync(path, "utf8");
		const { data } = matter(contents);
		return {
			category: data.category[0].name,
			excerpt: data.excerpt,
			image: data.image,
			path: `https://rad-web.vercel.app/projekty/${data.slug}`,
			release: data.release,
			stack: data.stack,
			title: data.title,
		};
	});

	return {
		props: {
			articles,
			persons,
			projects,
		},
	};
};
