import Blog from "../components/Pages/Home/Blog/Blog/Blog";
import Trailer from "../components/Pages/Home/Trailer/Trailer";
import Projects from "../components/Pages/Home/Projects/Projects/Projects";
import Layout from "./../components/Layout/Layout/Layout";
import Hero from "./../components/Pages/Home/Hero/Hero/Hero";
import Testimonials from "../components/Pages/Home/Testimonials/Testimonials";
import About from "../components/Pages/Home/About/About";
import { persons } from "../data/utils/persons";
import { homepage } from "../data/pages/homepage";
import { getStructuredDataOrganization } from "../lib/getStructuredData";

import fs from "fs";
import matter from "gray-matter";
import { iArticle, iProject } from "../src/ts/interface";

interface iPage {
	articles: iArticle[];
	projects: iProject[];
}

const Page = ({ articles, projects }: iPage) => {
	console.log(projects);
	return (
		<Layout
			image={homepage.pl.seo.image}
			meta={{
				description: homepage.pl.seo.meta.description,
				title: homepage.pl.seo.meta.title,
			}}
			og={{
				description: homepage.pl.seo.og.description,
				title: homepage.pl.seo.og.title,
				type: "website",
			}}
			schema={getStructuredDataOrganization()}
			hero={
				<Hero
				// buttons={homepage.pl.content.hero.buttons}
				// content={homepage.pl.content.hero.content}
				// title={homepage.pl.content.hero.title}
				/>
			}
		>
			<main className="homepage mainHP">
				{/* <Trailer movie={homepage.pl.content.trailer} /> */}
				<Blog
					button={{
						path: homepage.pl.content.blog.button.path,
						title: homepage.pl.content.blog.button.title,
					}}
					cards={articles}
					content={homepage.pl.content.blog.content}
					title={homepage.pl.content.blog.title}
				/>
				<About
					button={{
						path: homepage.pl.content.about.button.path,
						title: homepage.pl.content.about.button.title,
					}}
					cards={Object.values(persons.pl)}
					content={homepage.pl.content.about.content}
					title={homepage.pl.content.about.title}
				/>
				<Projects
					title={homepage.pl.content.projects.title}
					content={homepage.pl.content.projects.content}
					button={{
						path: homepage.pl.content.projects.button.path,
						title: homepage.pl.content.projects.button.title,
					}}
					cards={projects}
				/>
				<Testimonials cards={homepage.pl.content.testimonials} />
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
			title: data.title,
		};
	});

	return {
		props: {
			articles,
			projects,
		},
	};
};
