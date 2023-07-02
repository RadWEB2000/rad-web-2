import home from "@default/content/pl/pages/start";
import Layout from "@default/src/components/Layout/Layout";
import { Seo } from "@default/src/components/Layout/Seo/Seo";
import { AboutUs } from "@default/src/components/Page/HomePage/AboutUs/AboutUs";
import { Blog } from "@default/src/components/Page/HomePage/Blog/Blog";
import { Hero } from "@default/src/components/Page/HomePage/Hero/Hero";
import { Projects } from "@default/src/components/Page/HomePage/Projects/Projects";
import { Statistics } from "@default/src/components/Page/HomePage/Statistics/Statistics";
import { HomeProjectsStatsWrapper } from "@default/src/components/Utils/Wrappers/HomeProjectsStatsWrapper/HomeProjectsStatsWrapper";
import { example } from "@default/src/data/example";
import fs from "fs";
import matter from "gray-matter";

interface iPage {
	data: {
		articles: {
			category: string;
			excerpt: string;
			image: string;
			release: string;
			title: string;
			slug: string;
			uri: string;
		}[];
		projects: {
			release: string;
			excerpt: string;
			image: string;
			title: string;
			category: {
				name: string;
				uri: string;
			}[];
			slug: string;
		}[];
		team: {
			fullname: string;
			image: string;
			uri: string;
			jobs: string;
		}[];
	};
}

const Page = ({ data }: iPage) => {
	const { seo, hero, blog, projects, team, statistics } = home;
	return (
		<>
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
				<Hero
					title={hero.title}
					slogan={hero.slogan}
					menu={hero.menu}
					services={hero.services}
					socials={hero.socials}
				/>
				<Blog
					cards={data?.articles}
					button={blog.button}
					content={blog.content}
					title={blog.title}
				/>
				<HomeProjectsStatsWrapper>
					<Projects
						button={projects.button}
						cards={data?.projects}
						content={projects.content}
						title={projects.title}
					/>
					<Statistics statistics={statistics} />
				</HomeProjectsStatsWrapper>
				<AboutUs
					button={team.button}
					cards={data?.team}
					content={team.content}
					title={team.title}
				/>
			</Layout>
		</>
	);
};

export default Page;

export const getStaticProps = () => {
	const articles = () => {
		const directory = `${process.cwd()}/content/pl/articles`;
		const getSubdirectories = () => {
			const subdirectories = fs
				.readdirSync(directory, { withFileTypes: true })
				.filter((dirent) => dirent.isDirectory())
				.map((dirent) => dirent.name);
			return subdirectories;
		};
		const getArticles = () => {
			const articles = getSubdirectories().map((item) => {
				const subarticlesDirectory = `${directory}/${item}`;
				const articlesFiles = fs
					.readdirSync(subarticlesDirectory)
					.filter((file) => file.endsWith(".mdx"));
				return articlesFiles.map((file) => {
					const path = `${subarticlesDirectory}/${file}`;
					const contents = fs.readFileSync(path, "utf8");
					const { data } = matter(contents);
					return {
						category: data.category,
						excerpt: data.excerpt,
						image: data.image,
						release: data.publishedTime,
						title: data.title,
						uri: `/blog/${data.category}/${data.slug}`,
					};
				});
			});
			return articles;
		};

		const articles = getArticles().flat();
		return articles;
	};

	const projects = () => {
		const directory = `${process.cwd()}/content/pl/projects`;
		const files = fs
			.readdirSync(directory)
			.filter((file) => file.endsWith(".mdx"));
		const projects = files.map((file) => {
			const contents = fs.readFileSync(`${directory}/${file}`, "utf8");
			const { data } = matter(contents);
			return {
				release: `${data.publishedTime}`,
				excerpt: data.excerpt,
				image: data.image,
				title: data.title,
				category: data.category,
				slug: `/projekty/${data.slug}`,
			};
		});
		return projects;
	};

	const team = () => {
		const directory = `${process.cwd()}/content/pl/persons`;
		const files = fs
			.readdirSync(directory)
			.filter((file) => file.endsWith(".mdx"));
		const team = files.map((file) => {
			const contents = fs.readFileSync(`${directory}/${file}`, "utf8");
			const { data } = matter(contents);
			return {
				fullname: `${data.firstname} ${data.lastname}`,
				image: data.image,
				uri: `/o-nas/${data.slug}`,
				jobs: data.jobs,
			};
		});
		return team;
	};

	return {
		props: {
			data: {
				articles: articles(),
				projects: projects(),
				team: team(),
			},
		},
	};
};
