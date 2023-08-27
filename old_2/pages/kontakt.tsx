import { page } from "@default/content/pl/pages/kontakt";
import Layout from "@default/src/components/Layout/Layout";
import { HeroPage } from "@default/src/components/Utils/Hero/HeroPage/HeroPage";
import { ContactPageWrapper } from "@default/src/components/Utils/Wrappers/ContactPageWrapper/ContactPageWrapper";
import { about } from "@default/src/data/about";
import matter from "gray-matter";
import fs from "fs";
import { Seo } from "@default/src/components/Layout/Seo/Seo";

interface iPage {
	data: {
		team: {
			email: {
				name: string;
				value: string;
				url: string;
			};
			phone: {
				name: string;
				value: string;
				url: string;
			};
			fullname: string;
			image: string;
			uri: string;
			jobs: string;
		}[];
	};
}

const Page = ({ data }: iPage) => {
	const { seo, hero, fields } = page;
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
			<ContactPageWrapper
				button={{
					label: "Wyślij",
				}}
				fields={fields}
				persons={data?.team}
			/>
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
				email: {
					name: data.emailName,
					value: data.email,
					url: data.emailUrl,
				},
				phone: {
					name: data.phoneName,
					value: data.phone,
					url: data.phoneUrl,
				},
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
