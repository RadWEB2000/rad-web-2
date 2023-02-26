import Blog from "../components/Pages/Home/Blog/Blog/Blog";
import Trailer from "../components/Pages/Home/Trailer/Trailer";
import Projects from "../components/Pages/Home/Projects/Projects/Projects";
import Layout from "./../components/Layout/Layout/Layout";
import Hero from "./../components/Pages/Home/Hero/Hero/Hero";
import { posts } from "./../data/pages/posts";
import { projects } from "../data/pages/projects";
import Testimonials from "../components/Pages/Home/Testimonials/Testimonials";
import About from "../components/Pages/Home/About/About";
import { persons } from "../data/utils/persons";
import { homepage } from "../data/pages/homepage";
import { getStructuredDataOrganization } from "../lib/getStructuredData";
const Page = () => {
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
					buttons={homepage.pl.content.hero.buttons}
					content={homepage.pl.content.hero.content}
					title={homepage.pl.content.hero.title}
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
					cards={[...posts.pl.articles]}
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
					cards={projects.pl.main.projects.cards}
				/>
				<Testimonials cards={homepage.pl.content.testimonials} />
			</main>
		</Layout>
	);
};
export default Page;
