import Layout from "../../../components/Layout/Layout/Layout";
import SearchField from "../../../components/Utilities/Forms/SearchField/SearchField";
import HeroPage from "../../../components/Utilities/Hero/HeroPage/HeroPage";
import { blog } from "../../../data/pages/blog";
import { useEffect, useState } from "react";
import BlogCardBlogPage from "../../../components/Utilities/Cards/BlogCards/BlogCardBlogPage/BlogCardBlogPage";
import { posts } from "../../../data/pages/posts";
import Cards from "../../../components/Pages/Blog/Cards/Cards";
import { useRouter } from "next/router";
const Page = () => {
	const [searchValue, setSearchValue] = useState("");
	const { query } = useRouter();
	console.log(query.category);
	const { pl } = blog;
	return (
		<Layout
			image="https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_960_720.jpg"
			meta={{
				description: pl.main.seo.meta.description,
				title: pl.main.seo.meta.title,
			}}
			og={{
				description: pl.main.seo.og.description,
				title: pl.main.seo.og.title,
				type: "website",
			}}
			schema={{}}
		>
			<HeroPage content={pl.main.hero.content} title={pl.main.hero.title} />
			<main>
				<SearchField handle={setSearchValue} placeholder={`Szukaj`} />
				<Cards>
					{posts.pl.articles
						// .filter((item) =>
						// 	item.category.toLowerCase().includes("programowanie")
						// )
						.filter(
							(item) =>
								item.hero.date
									.toLowerCase()
									.includes(searchValue.toLowerCase()) ||
								item.hero.excerpt
									.toLowerCase()
									.includes(searchValue.toLowerCase()) ||
								item.title.toLowerCase().includes(searchValue.toLowerCase())
						)
						.map(({ hero, path }) => (
							<BlogCardBlogPage
								category={``}
								date={hero.date}
								excerpt={hero.excerpt}
								image={hero.image}
								key={hero.title}
								path={path}
								title={hero.title}
							/>
						))}
				</Cards>
			</main>
		</Layout>
	);
};
export default Page;
