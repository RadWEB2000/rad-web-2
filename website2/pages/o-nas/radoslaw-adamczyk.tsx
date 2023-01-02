import { Chrono } from "react-chrono";
import Layout from "../../components/Layout/Layout/Layout";
import Jobs from "../../components/Pages/AboutUs/Page/Jobs/Jobs";
import Mission from "../../components/Pages/AboutUs/Page/Mission/Mission";
import PersonsCards from "../../components/Pages/AboutUs/Page/PersonsCards/PersonsCards";
import HeroAboutPage from "../../components/Utilities/Hero/HeroAboutPage/HeroAboutPage";
import SectionAboutPersonPage from "../../components/Utilities/Sections/SectionAboutPersonPage/SectionAboutPersonPage";
import HeroPage from "./../../components/Utilities/Hero/HeroPage/HeroPage";
import { about_us } from "./../../data/pages/about_us";
const Page = () => {
	const { pl } = about_us;
	return (
		<Layout
			image={pl.radoslaw_adamczyk.seo.image}
			meta={{
				description: pl.radoslaw_adamczyk.seo.meta.description,
				title: pl.radoslaw_adamczyk.seo.meta.title,
			}}
			og={{
				description: pl.radoslaw_adamczyk.seo.og.description,
				title: pl.radoslaw_adamczyk.seo.og.title,
				type: "website",
			}}
		>
			<HeroAboutPage
				cities={pl.radoslaw_adamczyk.content.hero.cities}
				fullname={{
					firstname: pl.radoslaw_adamczyk.content.hero.fullname.firstname,
					lastname: pl.radoslaw_adamczyk.content.hero.fullname.lastname,
				}}
				image={pl.radoslaw_adamczyk.content.hero.image}
				jobs={pl.radoslaw_adamczyk.content.hero.jobs}
				socials={pl.radoslaw_adamczyk.content.hero.socials}
			/>
			<main>
				{pl.radoslaw_adamczyk.content.content.map(
					({ content, image, iframe, title }) => (
						<SectionAboutPersonPage
							content={content}
							iframe={iframe}
							image={image}
							key={title}
							title={title}
						/>
					)
				)}
				{pl.radoslaw_adamczyk.content.jobs && (
					<Jobs
						cards={pl.radoslaw_adamczyk.content.jobs.timeline}
						content={pl.radoslaw_adamczyk.content.jobs.content}
						title={pl.radoslaw_adamczyk.content.jobs.title}
					/>
				)}
			</main>
		</Layout>
	);
};
export default Page;
