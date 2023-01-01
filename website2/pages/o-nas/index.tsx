import Layout from "../../components/Layout/Layout/Layout";
import Mission from "../../components/Pages/AboutUs/Page/Mission/Mission";
import PersonsCards from "../../components/Pages/AboutUs/Page/PersonsCards/PersonsCards";
import HeroPage from "./../../components/Utilities/Hero/HeroPage/HeroPage";
import { about_us } from "./../../data/pages/about_us";
const Page = () => {
	const { pl } = about_us;
	return (
		<Layout
			image={pl.page.seo.image}
			meta={{
				description: pl.page.seo.meta.description,
				title: pl.page.seo.meta.title,
			}}
			og={{
				description: pl.page.seo.og.description,
				title: pl.page.seo.og.title,
				type: "website",
			}}
		>
			<HeroPage
				content={pl.page.content.hero.content}
				title={pl.page.content.hero.title}
			/>
			<main>
				<Mission
					cards={pl.page.content.mission.cards}
					content={pl.page.content.mission.content}
					title={pl.page.content.mission.title}
				/>
				<PersonsCards
					cards={pl.page.content.peoplesCards}
					content={`Soluta exercitationem vel ad quidem totam vel excepturi earum. Omnis mollitia dolorem rerum aliquid dolor quisquam deleniti. Rerum autem nesciunt laboriosam. Iste non repellendus beatae praesentium iste. Ipsa tenetur quia quod quaerat ipsam ad vel. Delectus eos ut voluptatem ullam ut. Vel cum ut quos sequi. Pariatur magnam dicta voluptas.`}
					title="Zespół"
				/>
			</main>
		</Layout>
	);
};
export default Page;
