import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout/Layout";
import Jobs from "../../components/Pages/AboutUs/Page/Jobs/Jobs";
import HeroAboutPage from "../../components/Utilities/Hero/HeroAboutPage/HeroAboutPage";
import SectionAboutPersonPage from "../../components/Utilities/Sections/SectionAboutPersonPage/SectionAboutPersonPage";
import { about_us } from "./../../data/pages/about_us";
interface iStaticProps {
	params: {
		person: string;
	};
}
interface IntPage {
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
	content: {
		hero: {
			cities: string;
			fullname: {
				firstname: string;
				lastname: string;
			};
			image: string;
			jobs: string;
			socials: string[];
		};
		content: {
			content: string;
			iframe?: string;
			image?: string;
			title: string;
		}[];
		jobs: {
			cards: {
				date: string;
				title: string;
				subtitle: string;
				content: string;
			}[];
			content: string;
			title: string;
		};
	};
}
const Page = ({ content, seo }: IntPage) => {
	return (
		<Layout
			image={seo ? seo.image : ""}
			meta={{
				description: seo ? seo.meta.description : "",
				title: seo ? seo.meta.title : "",
			}}
			schema={{}}
			og={{
				description: seo ? seo.og.description : "",
				title: seo ? seo.og.title : "",
				type: "website",
			}}
		>
			<HeroAboutPage
				cities={content ? content.hero.cities : ""}
				fullname={{
					firstname: content ? content.hero.fullname.firstname : "",
					lastname: content ? content.hero.fullname.lastname : "",
				}}
				image={content ? content.hero.image : ""}
				jobs={content ? content.hero.jobs : ""}
				socials={content ? content.hero.socials : [""]}
			/>
			<main>
				{content?.content.map(({ content, image, iframe, title }) => (
					<SectionAboutPersonPage
						content={content}
						iframe={iframe}
						image={image}
						key={title}
						title={title}
					/>
				))}
				{content?.jobs && (
					<Jobs
						cards={content?.jobs.cards}
						content={content?.jobs.content}
						title={content?.jobs.title}
					/>
				)}
			</main>
		</Layout>
	);
};
export default Page;

export const getStaticPaths = async () => {
	return {
		paths: [
			{ params: { person: "/o-nas/radoslaw-adamczyk" } },
			{ params: { person: "/o-nas/filip-bukowiecki" } },
			{ params: { person: "/o-nas/klaudia-paluch" } },
			{ params: { person: "/radoslaw-adamczyk" } },
			{ params: { person: "/filip-bukowiecki" } },
			{ params: { person: "/klaudia-paluch" } },
		],
		fallback: true,
	};
};
export const getStaticProps = async ({ params }: iStaticProps) => {
	const person = () => {
		if (params.person.replace("-", "_") == "radoslaw_adamczyk") {
			return about_us?.pl.radoslaw_adamczyk;
		} else {
			return about_us?.pl.radoslaw_adamczyk;
		}
	};
	return {
		props: {
			seo: {
				image: person().seo.image,
				meta: {
					description: person().seo.meta.description,
					title: person().seo.meta.title,
				},
				og: {
					description: person().seo.og.description,
					title: person().seo.og.title,
				},
			},
			content: {
				hero: {
					citites: person().content.hero.cities,
					fullname: {
						firstname: person().content.hero.fullname.firstname,
						lastname: person().content.hero.fullname.lastname,
					},
					image: person().content.hero.image,
					jobs: person().content.hero.jobs,
					socials: person().content.hero.socials,
				},
				content: person().content.content,
				jobs: {
					title: person().content.jobs.title,
					content: person().content.jobs.content,
					cards: person().content.jobs.timeline,
				},
			},
		},
	};
};
