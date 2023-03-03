import Layout from "../../components/Layout/Layout/Layout";
import Cards from "../../components/Pages/Projects/Cards/Cards";
import ProjectPageCard from "../../components/Utilities/Cards/ProjectCards/ProjectPageCard/ProjectPageCard";
import { projects } from "../../data/pages/projects";
import HeroPage from "./../../components/Utilities/Hero/HeroPage/HeroPage";
import { projectspage } from "./../../data/pages/projectspage";
import fs from "fs";
import matter from "gray-matter";
import { articles } from "./../../data/utils/articles";
const Page = ({ articles }: { articles: any | any[] }) => {
	const { pl } = projects;
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
				<HeroPage
					content={projectspage.pl.main.content.hero.content}
					title={projectspage.pl.main.content.hero.title}
				/>
			}
		>
			<main>
				<Cards>
					{articles
						.sort(
							(a: any, b: any) =>
								new Date(b.release).getTime() - new Date(a.release).getTime()
						)
						.map(
							({
								slug,
								category,
								release,
								excerpt,
								image,
								title,
							}: {
								slug: any;
								category: any;
								release: any;
								excerpt: any;
								image: any;
								title: any;
							}) => (
								<ProjectPageCard
									category={{
										name: category,
										value: "seo",
									}}
									excerpt={excerpt}
									image={image}
									key={title}
									path={`/projekty/${slug}`}
									title={title}
								/>
							)
						)}
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
			category: data.category,
			release: `${data.release}`,
			excerpt: data.excerpt,
			image: data.image,
			title: data.title,
		};
	});

	return {
		props: {
			articles,
		},
	};
};
