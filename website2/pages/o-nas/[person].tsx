import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout/Layout";
import Jobs from "../../components/Pages/AboutUs/Page/Jobs/Jobs";
import Content from "../../components/Pages/PersonPage/Content/Content";
import Hero from "../../components/Pages/PersonPage/Hero/Hero";
import HeroAboutPage from "../../components/Utilities/Hero/HeroAboutPage/HeroAboutPage";
import SectionAboutPersonPage from "../../components/Utilities/Sections/SectionAboutPersonPage/SectionAboutPersonPage";
import { aboutpage } from "../../data/pages/aboutpage";
import { getStructuredDataPerson } from "./../../lib/getStructuredData";

const Page = ({
	content,
	email,
	hero,
	history,
	phone,
	seo,
}: {
	content: any;
	email: any;
	hero: any;
	history: any;
	phone: any;
	seo: any;
}) => {
	return (
		<Layout
			image={seo?.image}
			meta={{
				description: seo?.meta.description,
				title: seo?.meta.title,
			}}
			schema={getStructuredDataPerson({
				author: {
					fullname: {
						firstname: hero?.fullname.firstname,
						lastname: hero?.fullname.lastname,
					},
					image: `https://rad-web.vercel.app${hero?.image}`,
					jobs: hero?.jobs,
					path: `https://rad-web.vercel.app${hero?.path}`,
					socials: [hero?.socials],
				},
			})}
			og={{
				description: seo?.og.description,
				title: seo?.og.title,
				type: "website",
			}}
		>
			<Hero
				cities={hero?.cities}
				fullname={{
					firstname: hero?.fullname.firstname,
					lastname: hero?.fullname.lastname,
				}}
				image={hero?.image}
				jobs={hero?.jobs}
				email={email?.address}
				phone={phone?.address}
				socials={hero?.socials}
				website={{
					title: hero?.website.title,
					url: hero?.website.url,
					visible: hero?.website.visible,
				}}
			/>
			<main>
				{content && <Content content={content} />}
				{history && <Jobs cards={history} content={``} title={``} />}
			</main>
		</Layout>
	);
};
export default Page;

export const getStaticProps = async ({ params }: { params: any }) => {
	const getPerson = aboutpage.pl.subpages.filter((item: any) => {
		return item.slug === params.person;
	});
	return {
		props: {
			content: getPerson[0].content,
			email: getPerson[0].email,
			hero: getPerson[0].hero,
			history: getPerson[0].history,
			phone: getPerson[0].phone,
			seo: getPerson[0].seo,
		},
	};
};
export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	};
};
