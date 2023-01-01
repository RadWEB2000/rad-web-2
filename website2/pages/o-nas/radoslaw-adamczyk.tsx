import Layout from "../../components/Layout/Layout/Layout";
import Mission from "../../components/Pages/AboutUs/Page/Mission/Mission";
import PersonsCards from "../../components/Pages/AboutUs/Page/PersonsCards/PersonsCards";
import HeroAboutPage from "../../components/Utilities/Hero/HeroAboutPage/HeroAboutPage";
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
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolores
				dolorum, suscipit doloribus iste ducimus tenetur consequuntur nobis
				repudiandae. Consequuntur inventore dicta numquam quaerat earum aliquid
				quod veniam fuga facere. Sit quo ullam reiciendis quas magni sequi
				exercitationem natus, eum fugiat. Perspiciatis ab voluptate maxime sit
				pariatur corporis provident atque necessitatibus officiis ullam. Quidem
				fuga perferendis, quod odit tenetur vel? Ex odit expedita deleniti
				pariatur iusto? Placeat harum rem, earum dolor ad nemo neque natus.
				Officia dicta, ipsum ullam dolorem veritatis quos? Commodi quidem, atque
				nam harum debitis alias dicta? Optio dolore maiores deserunt aliquid
				eaque ipsam itaque perferendis ex. At, quisquam accusamus voluptas cum
				laborum consequuntur natus unde officiis. Inventore magni eaque
				praesentium sapiente ipsa ad laborum placeat id. Cumque repellat
				consequuntur hic enim. Laudantium ab nulla exercitationem fugit dolores
				dolore excepturi alias ipsam accusantium. Corrupti recusandae explicabo
				vero, consequuntur architecto impedit, aut laborum ad eligendi suscipit
				delectus tenetur. Sapiente aspernatur fugiat non dolorem voluptate
				veritatis magnam soluta itaque, repudiandae culpa sed similique quasi
				dolorum delectus laboriosam? Soluta similique quam nulla id asperiores
				maiores vitae officia, beatae quis illum.
			</main>
		</Layout>
	);
};
export default Page;
