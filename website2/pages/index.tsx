import Blog from "../components/Pages/Home/Blog/Blog/Blog";
import Trailer from "../components/Pages/Home/Trailer/Trailer";
import Projects from "../components/Pages/Home/Projects/Projects/Projects";
import SectionHomePage from "../components/Utilities/Sections/SectionHomePage/SectionHomePage";
import Layout from "./../components/Layout/Layout/Layout";
import Hero from "./../components/Pages/Home/Hero/Hero/Hero";
import { home } from "./../data/pages/home";
import { posts } from "./../data/pages/posts";
import { projects } from "../data/pages/projects";
import Testimonials from "../components/Pages/Home/Testimonials/Testimonials";
import { testimonials } from "./../data/pages/testimonials";
import About from "../components/Pages/Home/About/About";
import { peoplesCards } from "./../data/pages/peoplesCards";
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
				<Trailer movie="/assets/movie/trailer.mp4" />
				<Blog
					button={{
						path: "/blog",
						title: "Więcej",
					}}
					cards={[...cards]}
					content={`Soluta sit magnam corporis iusto optio nihil excepturi in. Est itaque aut atque ipsam ea et nam. Esse iusto odio sint ut cupiditate est veritatis est. Molestiae molestias et autem rem et iure commodi voluptas velit. Quibusdam a qui eum consequatur ullam distinctio. Deserunt porro cupiditate ut. Dolorum excepturi suscipit. Consectetur temporibus placeat. Optio quas voluptatem dolores et et soluta vel aspernatur. Aut dolores ullam aliquam odit occaecati voluptas maxime labore quis. Ea qui quo voluptatem dolorem ratione nam laboriosam doloremque voluptas.`}
					title="Blog"
				/>
				<About
					button={{
						path: "",
						title: "więcej",
					}}
					cards={peoplesCards.pl}
					content={`Quia velit libero deserunt reprehenderit quis animi dolorem tempore. Corrupti et magnam voluptates eaque repellat minus explicabo et aut. Dolor corporis unde non beatae deleniti nesciunt quaerat est. Doloremque tenetur illo exercitationem eaque non. Officia est aut ea ut nulla. Ipsa iste dolorem tempore dolor.`}
					title="Kim jesteśmy?"
				/>
				<Projects
					title="Projekty i realizacje komercyjne"
					content="Quia iusto quia quam est. Ad ea ad in. Odit voluptas aut possimus placeat laborum voluptas accusantium. Voluptatibus corrupti omnis est dolore rem et dolor a dolorem. In qui exercitationem voluptas quisquam id. Neque aut similique quo impedit quod consequatur aut est."
					button={{
						path: "/projekty",
						title: "więcej",
					}}
					cards={projects.pl.main.projects.cards}
				/>
				<Testimonials cards={testimonials.pl} />
			</main>
		</Layout>
	);
};
export default Page;
