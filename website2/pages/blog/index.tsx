import Layout from "../../components/Layout/Layout/Layout";
import SearchField from "../../components/Utilities/Forms/SearchField/SearchField";
import HeroPage from "../../components/Utilities/Hero/HeroPage/HeroPage";
import { blog } from "./../../data/pages/blog";
import { useEffect, useState } from "react";
import BlogCardBlogPage from "../../components/Utilities/Cards/BlogCards/BlogCardBlogPage/BlogCardBlogPage";
import { posts } from "./../../data/pages/posts";
import Cards from "../../components/Pages/Blog/Cards/Cards";
import { blogpage } from "./../../data/pages/blogpage";
const Page = () => {
	const [searchValue, setSearchValue] = useState("");
	const { pl } = blog;
	const { pl: plPosts } = posts;
	return (
		<Layout
			image="https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_960_720.jpg"
			meta={{
				description: blogpage.pl.main.seo.meta.description,
				title: blogpage.pl.main.seo.meta.title,
			}}
			og={{
				description: blogpage.pl.main.seo.og.description,
				title: blogpage.pl.main.seo.og.title,
				type: "website",
			}}
			schema={{}}
		>
			<HeroPage
				content={blogpage.pl.main.content.hero.content}
				title={blogpage.pl.main.content.hero.title}
			/>
			<main>
				<SearchField handle={setSearchValue} placeholder={`Szukaj`} />
				<Cards>
					{posts.pl.articles
						.filter(
							(item) =>
								item.hero.excerpt
									.toLowerCase()
									.includes(searchValue.toLowerCase()) ||
								item.title.toLowerCase().includes(searchValue.toLowerCase())
						)
						.map(({ hero, title, path }) => (
							<BlogCardBlogPage
								category={``}
								date={hero.date}
								excerpt={hero.excerpt}
								image={hero.image}
								key={title}
								path={path}
								title={title}
							/>
						))}
				</Cards>
			</main>
		</Layout>
	);
};
export default Page;
