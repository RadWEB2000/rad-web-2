import { AboutUs, Blog, Hero, Projects, ServiceOverview } from 'views/Home';
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
		const { aboutUs, blog, hero, service_overview } =
			response.data.page.homePage;
		const posts = response.data.posts.nodes;
		const team = response.data.users.nodes;
		return {
			about_us: {
				button: aboutUs.button,
				content: aboutUs.content,
				image: aboutUs.image.node,
				team: team.map(
					({
						description,
						firstName,
						lastName,
						personPage: { image, works },
					}) => {
						console.log(image);
						return {
							firstName: firstName,
							image: image.node,
							lastName: lastName,
							overview: description,
							works: works,
						};
					}
				),
				title: aboutUs.title,
				uri: aboutUs.uri,
			},
			blog: {
				button: blog.button,
				content: {
					additional: blog.additional_content,
					base: blog.content,
				},
				title: blog.title,
				posts: posts.map(
					({
						author,
						categories,
						date,
						excerpt,
						featuredImage,
						title,
						uri,
					}) => {
						return {
							author: {
								firstName: author.node.firstName,
								lastName: author.node.lastName,
								image: author.node.personPage.image.node,
							},
							categories: categories.nodes.map((item) => {
								return { ...item };
							}),
							date,
							excerpt,
							image: featuredImage.node,
							title,
							uri,
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
				cards: service_overview.cards.map(({ icon, title }) => {
					return {
						icon: icon.node,
						title: title,
					};
				}),
				title: service_overview.title,
			},
		};
	});

	return (
		<>
			<Hero {...data.hero} />
			<main>
				<ServiceOverview {...data.service_overview} />
				<AboutUs {...data.about_us} />
				<Blog {...data.blog} />
				<Projects
					button={{
						target:"",
						title:"Wszystkie projekty",
						url:""
					}}	
					buttonCard='więcej'
					cards={[
						{
							categories:["Strony internetowe"],
							excerpt:"Amet repellat ut impedit. Illum aut facere cupiditate consequatur. Est temporibus autem sit sunt. Et magni fugit consequatur. Voluptatibus eos quia vel esse itaque numquam expedita nam impedit.",
							image:{
								altText:"",
								sourceUrl:"https://images.unsplash.com/photo-1530721733923-e2df89901503?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
								title:""
							},
							title:"Chief Tactics Consultant",
							uri:"#"
						},
						{
							categories:["Pozycjonowanie"],
							excerpt:"Amet repellat ut impedit. Illum aut facere cupiditate consequatur. Est temporibus autem sit sunt. Et magni fugit consequatur. Voluptatibus eos quia vel esse itaque numquam expedita nam impedit.",
							image:{
								altText:"",
								sourceUrl:"https://images.unsplash.com/photo-1600705722738-d39380209f19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
								title:""
							},
							title:"Dynamic Web Producer",
							uri:"#"
						},
						{
							categories:["Strony internetowe", "Pozycjonowanie"],
							excerpt:"Amet repellat ut impedit. Illum aut facere cupiditate consequatur. Est temporibus autem sit sunt. Et magni fugit consequatur. Voluptatibus eos quia vel esse itaque numquam expedita nam impedit.",
							image:{
								altText:"",
								sourceUrl:"https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
								title:""
							},
							title:"Direct Accountability Officer",
							uri:"#"
						},
						{
							categories:["Videomaking"],
							excerpt:"Amet repellat ut impedit. Illum aut facere cupiditate consequatur. Est temporibus autem sit sunt. Et magni fugit consequatur. Voluptatibus eos quia vel esse itaque numquam expedita nam impedit.",
							image:{
								altText:"",
								sourceUrl:"https://images.unsplash.com/photo-1533561797500-4fad4750814e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
								title:""
							},
							title:"Product Marketing Associate",
							uri:"#"
						},
					]}
					title='Nasze realizacje'
				/>
			</main>
		</>
	);
}
