import Blog from "../components/Pages/Home/Blog/Blog/Blog";
import SectionHomePage from "../components/Utilities/Sections/SectionHomePage/SectionHomePage";
import Layout from "./../components/Layout/Layout/Layout";
import Hero from "./../components/Pages/Home/Hero/Hero/Hero";
import { home } from "./../data/pages/home";
import { posts } from "./../data/pages/posts";
const Page = () => {
	const { pl } = home;
	const { cards } = posts.pl;
	return (
		<Layout
			image="https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_960_720.jpg"
			meta={{
				description: "",
				title: "",
			}}
			og={{
				description: "",
				title: "",
				type: "website",
			}}
		>
			<Hero
				buttons={pl.hero.buttons}
				content={pl.hero.content}
				title={pl.hero.title}
			/>
			<main>
				<Blog
					button={{
						path: "/blog",
						title: "Więcej",
					}}
					cards={[...cards]}
					content={`Soluta sit magnam corporis iusto optio nihil excepturi in. Est itaque aut atque ipsam ea et nam. Esse iusto odio sint ut cupiditate est veritatis est. Molestiae molestias et autem rem et iure commodi voluptas velit. Quibusdam a qui eum consequatur ullam distinctio. Deserunt porro cupiditate ut. Dolorum excepturi suscipit. Consectetur temporibus placeat. Optio quas voluptatem dolores et et soluta vel aspernatur. Aut dolores ullam aliquam odit occaecati voluptas maxime labore quis. Ea qui quo voluptatem dolorem ratione nam laboriosam doloremque voluptas.`}
					title="Blog"
				/>
				<SectionHomePage
					content={`Soluta sit magnam corporis iusto optio nihil excepturi in. Est itaque aut atque ipsam ea et nam. Esse iusto odio sint ut cupiditate est veritatis est. Molestiae molestias et autem rem et iure commodi voluptas velit. Quibusdam a qui eum consequatur ullam distinctio. Deserunt porro cupiditate ut. Dolorum excepturi suscipit. Consectetur temporibus placeat. Optio quas voluptatem dolores et et soluta vel aspernatur. Aut dolores ullam aliquam odit occaecati voluptas maxime labore quis. Ea qui quo voluptatem dolorem ratione nam laboriosam doloremque voluptas.`}
					title="Projekty i realizacje - Case Studies"
				/>
			</main>
		</Layout>
	);
};
export default Page;
