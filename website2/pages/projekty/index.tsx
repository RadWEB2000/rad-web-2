import Layout from "../../components/Layout/Layout/Layout";
import Cards from "../../components/Pages/Projects/Cards/Cards";
import ProjectPageCard from "../../components/Utilities/Cards/ProjectCards/ProjectPageCard/ProjectPageCard";
import { projects } from "../../data/pages/projects";
import HeroPage from "./../../components/Utilities/Hero/HeroPage/HeroPage";
const Page = () => {
	const { pl } = projects;
	return (
		<Layout
			image={pl.main.seo.image}
			meta={{
				description: pl.main.seo.meta.description,
				title: pl.main.seo.meta.title,
			}}
			og={{
				description: pl.main.seo.og.description,
				title: pl.main.seo.og.title,
				type: "website",
			}}
		>
			<HeroPage content={pl.main.hero.content} title={pl.main.hero.title} />
			<main>
				<Cards>
					{pl.main.projects.cards.map(
						({ category, excerpt, image, path, title }) => (
							<ProjectPageCard
								category={{
									name: category.name,
									value: category.value,
								}}
								excerpt={excerpt}
								image={image}
								key={title}
								path={path}
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
