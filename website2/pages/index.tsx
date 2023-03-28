import AboutSection from "../src/components/Pages/HomePage/AboutSection/AboutSection";
import BlogSection from "../src/components/Pages/HomePage/BlogSection/BlogSection";
import fs from "fs";
import HeroHome from "../src/components/Utilities/Hero/HeroHome/HeroHome";
import Layout from "../src/components/Layout/Layout/Layout";
import matter from "gray-matter";
import ProjectsSection from "../src/components/Pages/HomePage/ProjectsSection/ProjectsSection";
import TestimonialsSection from "../src/components/Pages/HomePage/TestimonialsSection/TestimonialsSection";
import { getStructuredDataOrganization } from "../lib/getStructuredData";
import { homepage } from "../data/pages/homepage";
import { iArticle, iProject } from "../src/ts/interface";
import { persons } from "../data/utils/persons";
import WhyUsSection from "../src/components/Pages/HomePage/WhyUsSection/WhyUsSection";

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
				<HeroHome
					buttons={[
						{
							path: "/blog",
							title: "blog",
						},
						{
							path: "/kontakt",
							title: "kontakt",
						},
					]}
					cards={[
						{
							content:
								"Strony internetowe są podstawą istnienia w internecie. Z nich się bierze fundamentalna wiedza oraz podstawowe zaufanie do osoby, czy też firmy lub organizacji.",
							image:
								"https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
							title: "Strony internetowe",
						},
						{
							content:
								"Pozycjonowanie stron internetowych, potocznie też nazywane SEO to szereg działań mających na celu wywindowanie stron www w wynikach wyszukiwania w Google, Bing, Yahoo.",
							image:
								"https://images.unsplash.com/photo-1633632799503-c8cff57c17f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
							title: "Marketing",
						},
						{
							content:
								"Tworzenie treści jest jak tchnienie życia w stronę internetową. Z publikowanych treści jest generowane zainteresowanie robotów wyszukiwarek i użytkowników stroną internetową. Co za tym idzie, treści w stronach internetowych powinny być unikalne oraz przyciągające uwagę użytkownika.",
							image:
								"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2Vic2l0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=80",
							title: "Copywriting",
						},
						{
							content:
								"Videomaking to usługa polegająca na tworzeniu i produkcji profesjonalnych filmów i materiałów wideo w celach marketingowych, promocyjnych, edukacyjnych, rozrywkowych i innych. ",
							image:
								"https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
							title: "Wideomaking",
						},
					]}
					content={homepage.pl.content.hero.content}
					title={homepage.pl.content.hero.title}
				/>
			}
		>
			<main className="homepage mainHP hp">
				<BlogSection
					button={{
						path: homepage.pl.content.blog.button.path,
						title: homepage.pl.content.blog.button.title,
					}}
					cards={articles}
					content={homepage.pl.content.blog.content}
					title={homepage.pl.content.blog.title}
				/>
				<AboutSection
					button={{
						path: homepage.pl.content.about.button.path,
						title: homepage.pl.content.about.button.title,
					}}
					cards={Object.values(persons.pl)}
					content={homepage.pl.content.about.content}
					title={homepage.pl.content.about.title}
				/>
				<ProjectsSection
					title={homepage.pl.content.projects.title}
					content={homepage.pl.content.projects.content}
					button={{
						path: homepage.pl.content.projects.button.path,
						title: homepage.pl.content.projects.button.title,
					}}
					cards={projects}
				/>
				{/* <WhyUsSection
					cards={[
						{
							content: `Est sed eveniet aut asperiores ut magni.Natus voluptas id laborum nihil.Neque at repudiandae soluta placeat omnis facere placeat consequatur. Maiores provident id ex qui ipsam ab. Labore eum id aut qui eaque vel.`,
							title: "Direct Quality Liaison",
						},
						{
							content: `Ea quod quo asperiores unde. Corrupti voluptas maiores ab. Reiciendis rerum reprehenderit ipsam.`,
							title: "Direct Quality Liaison",
						},
						{
							content: `Neque totam quidem eveniet commodi minima et eos expedita sequi. Nobis id eum. Est commodi animi dolorem nihil. Aperiam ut ea omnis est fugiat.`,
							title: "Direct Quality Liaison",
						},
					]}
					content={`Amet ad facere excepturi numquam quam pariatur et. Rem repellat provident omnis temporibus a. Recusandae officiis tenetur aliquid dicta omnis fugiat nobis voluptatum. Doloremque qui in quas quasi iste maxime. Dignissimos repudiandae necessitatibus. Excepturi corrupti molestiae quia. Temporibus eveniet fugiat omnis error error accusamus omnis. Officiis sit nostrum fuga. Et omnis animi facilis id deleniti repellendus.`}
					title="Dlaczego my?"
				/> */}
				{/* <TestimonialsSection cards={homepage.pl.content.testimonials} /> */}
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
