import HeroPage from "../../src/components/Utilities/Hero/HeroPage/HeroPage";
import Layout from "../../src/components/Layout/Layout/Layout";
import fs from "fs";
import matter from "gray-matter";
import Mission from "../../src/components/Pages/AboutPage/Mission/Mission";
import PersonsCards from "../../src/components/Pages/AboutPage/PersonsCards/PersonsCards";
import { aboutpage } from "./../../content/pages/aboutpage";
import { getStructuredDataWebsite } from "../../src/lib/functions/getStructuredData";

interface iPage {
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
}

const Page = ({ persons }: iPage) => {
	const { hero, mission, seo, team } = aboutpage.pl;
	console.log(persons);
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
			schema={getStructuredDataWebsite({ url: "/o-nas" })}
			hero={<HeroPage content={hero.content} title={hero.title} />}
		>
			<main>
				<Mission
					cards={mission.cards}
					content={mission.content}
					title={mission.title}
				/>
				<PersonsCards
					cards={Object.values(persons)}
					content={team.content}
					title={team.title}
				/>
			</main>
		</Layout>
	);
};
export default Page;

export const getStaticProps = async () => {
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
	return {
		props: {
			persons,
		},
	};
};
