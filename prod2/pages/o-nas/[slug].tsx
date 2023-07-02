import fs from "fs";
import Layout from "@default/src/components/Layout/Layout";
import matter from "gray-matter";
import { ArticleComponents } from "@default/src/components/Page/ArticlePage/ArticleComponents/ArticleComponents";
import { HeroPerson } from "@default/src/components/Utils/Hero/HeroPerson/HeroPerson";
import { MDXRemote } from "next-mdx-remote";
import { PersonPageWrapper } from "@default/src/components/Utils/Wrappers/PersonPageWrapper/PersonPageWrapper";
import { Seo } from "@default/src/components/Layout/Seo/Seo";
import { serialize } from "next-mdx-remote/serialize";

interface iPage {
	data: {
		seo: {
			articleSection: string;
			canonical: string;
			metaDescription: string;
			metaTitle: string;
			modifiedTime: string;
			openGraphDescription: string;
			openGraphTitle: string;
			publishedTime: string;
			site: string;
			schema: string[] | any[];
			website: string;
		};
		address: string;
		cities: string;
		cvFile: string | boolean;
		email: {
			name: string;
			value: string;
			url: string;
		};
		experience: any[];
		fullname: string;
		image: string;
		jobs: string;
		location: string;
		person: {
			button: string;
			website: string | boolean;
		};
		phone: {
			name: string;
			value: string;
			url: string;
		};
		slug: string;
		socials: string[];
		title: string;
	};
	source: any;
}

const Page = ({ data, source }: iPage) => {
	return (
		<Layout>
			<Seo
				image={data?.image}
				metaDescription={data?.seo.metaDescription}
				metaTitle={data?.seo.metaTitle}
				openGraphDescription={data?.seo.openGraphDescription}
				openGraphTitle={data?.seo.openGraphTitle}
				website={data?.seo.website}
				articleSection={data?.seo.articleSection}
				canonical={data?.seo.canonical}
				modifiedTime={data?.seo.modifiedTime}
				publishedTime={data?.seo.publishedTime}
				schema={data?.seo.schema}
			/>
			<HeroPerson
				cities={data?.cities}
				fullname={data?.fullname}
				image={{
					alt: "",
					src: data?.image,
					title: "",
				}}
				jobs={data?.jobs}
				socials={data?.socials}
			/>
			<PersonPageWrapper
				address={data?.address}
				email={data?.email}
				location={data?.location}
				phone={data?.phone}
			>
				<MDXRemote {...source} components={ArticleComponents} />
			</PersonPageWrapper>
		</Layout>
	);
};

export default Page;

export const getStaticPaths = async () => {
	const personsDirectory = `${process.cwd()}/content/pl/persons`;
	const filenames = fs.readdirSync(personsDirectory);

	const paths = filenames.map((filename) => ({
		params: { slug: filename.replace(".mdx", "") },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({
	params,
}: {
	params: {
		slug: string;
	};
}) => {
	const articleDirectory = `${process.cwd()}/content/pl/persons/${
		params.slug
	}.mdx`;

	const { content, data } = matter(fs.readFileSync(articleDirectory));

	const source = await serialize(content, {
		mdxOptions: {
			recmaPlugins: [],
			rehypePlugins: [],
		},
		scope: data,
	});

	return {
		props: {
			source,
			data: {
				seo: {
					articleSection: data.articleSection,
					canonical: data.canonical,
					metaDescription: data.metaDescription,
					metaTitle: data.metaTitle,
					modifiedTime: data.modifiedTime,
					openGraphDescription: data.openGraphDescription,
					openGraphTitle: data.openGraphTitle,
					publishedTime: data.publishedTime,
					site: data.site,
					schema: data.schema,
					website: data.website,
				},
				address: data.address,
				cities: data.cities,
				cvFile: data.cvFile,
				email: {
					name: data.emailName,
					value: data.email,
					url: data.emailUrl,
				},
				experience: data.experience,
				fullname: `${data.firstname} ${data.lastname}`,
				image: data.image,
				jobs: data.jobs,
				location: data.location,
				person: {
					button: data.personUrlButton,
					website: data.personUrl,
				},
				phone: {
					name: data.phoneName,
					value: data.phone,
					url: data.phoneUrl,
				},
				slug: data.slug,
				socials: data.socials,
				title: data.title,
			},
		},
	};
};
