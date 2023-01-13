import Layout from "../../../components/Layout/Layout/Layout";
import SearchField from "../../../components/Utilities/Forms/SearchField/SearchField";
import HeroPage from "../../../components/Utilities/Hero/HeroPage/HeroPage";
import { blog } from "../../../data/pages/blog";
import { useEffect, useState } from "react";
import BlogCardBlogPage from "../../../components/Utilities/Cards/BlogCards/BlogCardBlogPage/BlogCardBlogPage";
import { posts } from "../../../data/pages/posts";
import Cards from "../../../components/Pages/Blog/Cards/Cards";
import { useRouter } from "next/router";
import Breadcrumb from "../../../components/Utilities/Cards/Breadcrumb/Breadcrumb/Breadcrumb";
import HeroArticle from "../../../components/Utilities/Hero/HeroArticle/HeroArticle";
import Content from "../../../components/Pages/ArticlePage/Content/Content";
const Page = () => {
	const [searchValue, setSearchValue] = useState("");
	const { pathname } = useRouter();
	console.log(pathname.split("/"));
	const { pl } = blog;
	const { pl: plPosts } = posts;
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
		>
			<Breadcrumb
				breadcrumbs={[
					{
						path: `/${pathname.split("/")[1]}`,
						title: pathname.split("/")[1],
					},
					{
						path: `/${pathname.split("/")[1]}/${pathname.split("/")[2]}`,
						title: pathname.split("/")[2],
					},
				]}
			/>
			<HeroArticle
				date="Tue Jan 10 2023 20:56:31 GMT+0100 (czas środkowoeuropejski standardowy)"
				excerpt="Modi reiciendis voluptas est. Occaecati rerum voluptatem voluptatem. Nihil possimus sed molestiae praesentium tenetur aut possimus. Voluptatibus deserunt ut nisi aut sint recusandae minima. Eveniet minus sapiente tempore officia. Incidunt repudiandae facere numquam inventore eum cumque. Repellat qui quaerat illum nesciunt voluptates et earum delectus explicabo. Id tempore nostrum amet sequi rerum est beatae reiciendis id. Quia ab fugit expedita. Et esse rerum assumenda illo et et. Perspiciatis quis doloribus. Error natus quidem non quae. Voluptate modi est cumque autem. Placeat nostrum non laborum assumenda commodi possimus mollitia. "
				image="https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				lang="pl"
				time="24"
				title="Fenomen Windowsa"
				url="https://humanum.pl/prawo/prawo-dla-licencjatow-i-magistrow/"
			/>
			<main className="article">
				<Content
					content={`
						<h2>Jakiś tytuł</h2>
						<p>Vitae itaque <b>molestiae doloremque</b> architecto dolores. Ut voluptatem explicabo nostrum laborum. Quidem cum ut quasi libero porro et alias. Error nihil non rerum ad maiores labore tenetur. <a href="#">Modi incidunt</a> iure dolorem. Est alias inventore qui reiciendis distinctio et dignissimos facere corporis. Similique dolores aut. Aut sit aspernatur.</p>
				`}
				/>
				<Content
					content={`
						<h3>Jakiś tytuł</h3>
						<ul classname="regularList">
							<li>Quasi quas autem optio quod eius illo voluptas nihil maiores. Voluptatum repellat laudantium laboriosam earum ut. </li>
							<li>Quasi quas autem optio quod eius illo voluptas nihil maiores. Voluptatum repellat laudantium laboriosam earum ut. </li>
							<li>Quasi quas autem optio quod eius illo voluptas nihil maiores. Voluptatum repellat laudantium laboriosam earum ut. </li>
						</ul>
				`}
				/>
				<Content
					content={`
						<h3>Jakiś tytuł</h3>
						<ol>
							<li>Quasi quas autem optio quod eius illo voluptas nihil maiores. Voluptatum repellat laudantium laboriosam earum ut. </li>
							<li>Quasi quas autem optio quod eius illo voluptas nihil maiores. Voluptatum repellat laudantium laboriosam earum ut. </li>
							<li>Quasi quas autem optio quod eius illo voluptas nihil maiores. Voluptatum repellat laudantium laboriosam earum ut. </li>
						</ol>
				`}
				/>
				<Content
					content={`
						<h3>Jakiś tytuł</h3>
						<ul classname="regularList">
						<li><b>Quasi quas autem optio</b><p> quod eius illo voluptas nihil maiores. Voluptatum repellat laudantium laboriosam earum ut.</p> </li><br/>
						<li><b>Quasi quas autem optio quod</b> eius illo voluptas nihil maiores. Voluptatum repellat laudantium laboriosam earum ut. </li>
						<hr/>
						<li><b>Quasi quas autem optio quod</b> eius illo voluptas nihil maiores. Voluptatum repellat laudantium laboriosam earum ut. </li>
						</ul>
				`}
				/>
				<Content
					content={`
						<h2>Jakiś tytuł</h2>
						<ul>
							<li><h4>Quasi quas autem optio</h3><p> quod eius illo voluptas nihil maiores. Voluptatum repellat laudantium laboriosam earum ut.</p></li>
							<li><h4>Quasi quas autem optio quod</h4> eius illo voluptas nihil maiores. Voluptatum repellat laudantium laboriosam earum ut. </li>
							<li><h4>Quasi quas autem optio quod</h4> eius illo voluptas nihil maiores. Voluptatum repellat laudantium laboriosam earum ut. </li>
						</ul>
				`}
				/>
			</main>
		</Layout>
	);
};
export default Page;
