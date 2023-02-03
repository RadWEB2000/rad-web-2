import Layout from "../../components/Layout/Layout/Layout";
import Mission from "../../components/Pages/AboutUs/Page/Mission/Mission";
import PersonsCards from "../../components/Pages/AboutUs/Page/PersonsCards/PersonsCards";
import { aboutpage } from "../../data/pages/aboutpage";
import HeroPage from "./../../components/Utilities/Hero/HeroPage/HeroPage";
import { persons } from "./../../data/utils/persons";
const Page = () => {
	return (
		<Layout
			image={aboutpage.pl.main.seo.image}
			meta={{
				description: aboutpage.pl.main.seo.meta.description,
				title: aboutpage.pl.main.seo.meta.title,
			}}
			og={{
				description: aboutpage.pl.main.seo.og.description,
				title: aboutpage.pl.main.seo.og.title,
				type: "website",
			}}
		>
			<HeroPage
				content={aboutpage.pl.main.content.hero.content}
				title={aboutpage.pl.main.content.hero.title}
			/>
			<main>
				<Mission
					cards={aboutpage.pl.main.content.mission.cards}
					content={aboutpage.pl.main.content.mission.content}
					title={aboutpage.pl.main.content.mission.title}
				/>
				<PersonsCards
					cards={persons.pl}
					content={aboutpage.pl.main.content.team.content}
					title={aboutpage.pl.main.content.team.title}
				/>
			</main>
		</Layout>
	);
};
export default Page;
