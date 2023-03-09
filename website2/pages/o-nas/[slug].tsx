import Layout from "../../components/Layout/Layout/Layout";
import Jobs from "../../components/Pages/AboutUs/Page/Jobs/Jobs";
import { getStructuredDataPerson } from "../../lib/getStructuredData";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { ArticleComponents } from "./../../components/Pages/ArticlePage/ArticleComponents/ArticleComponents";
import { iJobCard } from "../../src/components/Utilities/Cards/JobCard/JobCard";
import HeroPerson from "../../src/components/Utilities/Hero/HeroPerson/HeroPerson";

interface iPage {
	data: any;
	frontMatter: {
		cities: string;
		email: string;
		firstname: string;
		image: string;
		jobs: string;
		jobsExperience: iJobCard[];
		lastname: string;
		metaDescription: string;
		metaTitle: string;
		ogDescription: string;
		ogTitle: string;
		path: string;
		phone: string;
		slug: string;
		socials: string[];
		website: string;
		websiteButton: string;
	};
}

const Page = ({ data, frontMatter }: iPage) => {
	console.log(frontMatter.jobsExperience);
	return (
		<Layout
			image={frontMatter.image}
			meta={{
				description: frontMatter.metaDescription,
				title: frontMatter.metaTitle,
			}}
			schema={getStructuredDataPerson({
				author: {
					fullname: {
						firstname: frontMatter.firstname,
						lastname: frontMatter.lastname,
					},
					image: frontMatter.image,
					jobs: frontMatter.jobs,
					path: frontMatter.path,
					socials: frontMatter.socials,
				},
			})}
			og={{
				description: frontMatter.ogDescription,
				title: frontMatter.ogTitle,
				type: "website",
			}}
			hero={
				<HeroPerson
					cities={frontMatter.cities}
					fullname={{
						firstname: frontMatter.firstname,
						lastname: frontMatter.lastname,
					}}
					image={frontMatter.image}
					jobs={frontMatter.jobs}
					email={frontMatter.email}
					phone={frontMatter.phone}
					socials={frontMatter.socials}
					website={frontMatter.website}
				/>
			}
		>
			<main>
				{data !== undefined && (
					<MDXRemote {...data} components={ArticleComponents} />
				)}
				{frontMatter.jobsExperience && (
					<Jobs
						cards={[...frontMatter.jobsExperience]}
						content={``}
						title={``}
					/>
				)}
			</main>
		</Layout>
	);
};
export default Page;

export const getStaticPaths = async () => {
	const postsDirectory = path.join(process.cwd(), "content", "persons", "pl");
	const filenames = fs.readdirSync(postsDirectory);
	const paths = filenames.map((filename) => {
		const filePath = path.join(postsDirectory, filename);
		const fileContnents = fs.readFileSync(filePath);
		const { data } = matter(fileContnents);
		return {
			params: {
				category: data.category,
				slug: filename.replace(/\.mdx/, ""),
			},
			// data,
		};
	});
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }: { params: any }) => {
	const { slug } = params;
	const filePath = path.join(
		process.cwd(),
		"content",
		"persons",
		"pl",
		`${slug}.mdx`
	);
	const fileContents = fs.readFileSync(filePath);
	const { content, data } = matter(fileContents);
	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
		scope: data,
	});
	return {
		props: {
			data: mdxSource,
			frontMatter: data,
		},
	};
};
