import { AboutUs, Hero, ServiceOverview } from 'views/Home';
import wordpressConnect from 'configs/wordpressConnect';
import HomePageQuery, {
	tHomePageRequestQuery,
	tHomePageResponseQuery,
} from 'gql/HomePageQuery';

export default async function HomePage() {
	const data = await wordpressConnect({
		key: `${process.env.WP_PL}`,
		query: HomePageQuery,
	}).then((response: tHomePageRequestQuery): tHomePageResponseQuery => {
		const {aboutUs,  blog, hero, service_overview } = response.data.page.homePage;
		const posts = response.data.posts.nodes;
		const team = response.data.users.nodes;
		return {
			about_us: {
				button:aboutUs.button,
				content:aboutUs.content,
				image:aboutUs.image.node,
				team: team.map(({description,firstName,lastName,personPage: {image,works}}) => {
					console.log(image)
					return {
						firstName:firstName,
						image:image.node,
						lastName:lastName,
						overview:description,
						works:works
					}
				}),
				title:aboutUs.title,
				uri:aboutUs.uri
			},
			blog: {
				button: blog.button,
				content: {
					additional: blog.additional_content,
					base: blog.content,
				},
				title: blog.title,
				posts: posts.map(
					({ categories, date, excerpt, title, uri }) => {
						return {
							categories: categories.nodes.map((item) => {
								return { ...item };
							}),
							date: date,
							excerpt: excerpt,
							title: title,
							uri: uri,
						};
					}
				),
			},
			hero: {
				background_image: { ...hero.background_image.node },
				buttons: hero.buttons.map(({ button }) => {
					return { ...button };
				}),
				slogan: hero.slogan,
				title: hero.title,
			},
			service_overview: {
				cards: service_overview.cards.map(({icon,title}) => {
					return {
						icon:icon.node,
						title:title
					}
				}),
				title:service_overview.title
			}
		};
	});

	return (
		<>
		<Hero
			{...data.hero}
			
		/>
		<main>
			<ServiceOverview
				{...data.service_overview}
			/>
			<AboutUs
				{...data.about_us}
			/>
		</main>
			<div>
				<h1>strona glowna</h1>
			</div>
		</>
	);
}
