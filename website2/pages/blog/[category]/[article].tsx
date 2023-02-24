import Layout from "../../../components/Layout/Layout/Layout";
import { posts } from "../../../data/pages/posts";
import Breadcrumb from "../../../components/Utilities/Cards/Breadcrumb/Breadcrumb/Breadcrumb";
import HeroArticle from "../../../components/Utilities/Hero/HeroArticle/HeroArticle";
import Content from "../../../components/Pages/ArticlePage/Content/Content";
import Summary from "../../../components/Pages/ArticlePage/Summary/Summary";
import Details from "../../../components/Pages/ArticlePage/Details/Details/Details";
import { getStructuredDataArticle } from "./../../../lib/getStructuredData";
import { getAuthor } from "../../../lib/getAuthor";
import HeroArticlePage from "./../../../components/Utilities/Hero/HeroArticlePage/HeroArticlePage";
const Page = ({
	author,
	breadcrumbs,
	content,
	hero,
	seo,
	summary,
	url,
}: {
	seo: {
		image: string;
		meta: {
			description: string;
			title: string;
		};
		og: {
			description: string;
			title: string;
		};
	};
	author: "adamczyk_radoslaw" | "bukowiecki_filip" | "paluch_klaudia";
	url: string;
	title: string;
	breadcrumbs: {
		path: string;
		title: string;
	}[];
	hero: {
		date: string;
		excerpt: string;
		image: string;
		lang: string;
		readingTime: string;
		title: string;
	};
	content: string;
	summary: {
		title: string;
		content?: string;
		list: string[];
		visible: boolean;
	};
}) => {
	return (
		<Layout
			image={seo?.image}
			meta={{
				description: seo?.meta.description,
				title: seo?.meta.title,
			}}
			og={{
				description: seo?.og.description,
				title: seo?.og.title,
				type: "article",
			}}
			schema={getStructuredDataArticle({
				author: {
					fullname: {
						firstname: getAuthor(author).fullname.firstname,
						lastname: getAuthor(author).fullname.lastname,
					},
					path: getAuthor(author).path,
				},
				date: {
					modified: hero?.date,
					published: hero?.date,
				},
				images: seo?.image,
				title: hero?.title,
				url: url,
			})}
			hero={
				<HeroArticlePage
					breadcrumbs={breadcrumbs}
					image={hero?.image}
					lang="pl"
					readingTime={hero?.readingTime}
					release={hero?.date}
					title={hero?.title}
					url={url}
				/>
			}
		>
			{/* {breadcrumbs && <Breadcrumb breadcrumbs={breadcrumbs} />}

			<HeroArticle
				date={hero?.date}
				excerpt={hero?.excerpt}
				image={hero?.image}
				lang={`pl`}
				time={hero?.readingTime}
				title={hero?.title}
				url={url}
			/> */}
			<main
				className="article"
				style={{
					marginTop: "15rem",
				}}
			>
				<Content content={content} />
				{summary?.visible && (
					<Summary
						title={summary.title}
						content={summary.content}
						list={summary.list}
					/>
				)}
				<Details
					author={{
						fullname: {
							firstname: getAuthor(author).fullname.firstname,
							lastname: getAuthor(author).fullname.lastname,
						},
						image: getAuthor(author).image,
						jobs: getAuthor(author).jobs,
						path: getAuthor(author).path,
					}}
				/>
			</main>
		</Layout>
	);
};
export default Page;

export const getStaticProps = ({ params }: { params: any }) => {
	const getArticle = posts.pl.articles.filter((item: any) => {
		return item.slug === params.article;
	});
	return {
		props: {
			seo: getArticle[0].seo,
			author: getArticle[0].author,
			breadcrumbs: getArticle[0].breadcrumbs,
			hero: getArticle[0].hero,
			content: getArticle[0].content,
			summary: getArticle[0].summary,
			url: getArticle[0].url,
		},
	};
};
export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	};
};
