import Layout from "@default/src/components/Layout/Layout";
import { Mission } from "@default/src/components/Page/AboutPage/Mission/Mission";
import { HeroPage } from "@default/src/components/Utils/Hero/HeroPage/HeroPage";
import { Team } from "@default/src/components/Page/AboutPage/Team/Team";
import aboutUs from "@default/content/pl/pages/o-nas";
import { Seo } from "@default/src/components/Layout/Seo/Seo";
import matter from "gray-matter";
import fs from "fs";

interface iPage {
	data: {
		team: {
			fullname: string;
			image: string;
			uri: string;
			jobs: string;
		}[];
	};
}
const Page = ({ data }: iPage) => {
	const { seo, hero, mission, team } = aboutUs;
	return (
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
			<HeroPage content={hero.content} image={hero.image} title={hero.title} />
			<Mission
				cards={mission.cards}
				content={mission.content}
				title={mission.title}
			/>
			<Team cards={data?.team} content={team.content} title={team.title} />
		</Layout>
	);
};

export default Page;

export const getStaticProps = () => {
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
				team: team(),
			},
		},
	};
};
