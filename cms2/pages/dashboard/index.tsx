import DashboardGrid from "@default/src/components/Page/Dashboard/DashboardGrid/DashboardGrid";
import Image from "next/image";
import { HiCursorClick } from "react-icons/hi";
import { FaRegEye } from "react-icons/fa";
import { CgTrending } from "react-icons/cg";
const Page = () => {
	return (
		<main>
			<DashboardGrid
				analytics={{
					clicks: {
						icon: <HiCursorClick />,
						title: "Clicks",
						value: "37",
					},
					position: {
						icon: <CgTrending />,
						title: "Position",
						value: "28.9",
					},
					views: {
						icon: <FaRegEye />,
						title: "Views",
						value: "718",
					},
					title: "See all statistics",
					path: "#",
				}}
				news={{
					items: [
						{
							button: "read",
							excerpt: `Internet stał się w XXI wieku podstawowym narzędziem do pozyskiwania klientów. W związku z tym SEO lokalne jest ważnym elementem marketingu każdego biznesu. SEO lokalne może pomóc twojej firmie w zwiększeniu widoczności i uzyskaniu wyższego wyniku w wynikach wyszukiwania.`,
							image: "http://placeimg.com/640/480/nightlife",
							path: "#",
							release:
								"Sun May 15 2022 00:08:35 GMT+0200 (Central European Summer Time)",
							title: "Jak zwiększyć widoczność swojego biznesu z lokalnym SEO?",
						},
						{
							button: "read",
							excerpt: `Internet stał się w XXI wieku podstawowym narzędziem do pozyskiwania klientów. W związku z tym SEO lokalne jest ważnym elementem marketingu każdego biznesu. SEO lokalne może pomóc twojej firmie w zwiększeniu widoczności i uzyskaniu wyższego wyniku w wynikach wyszukiwania.`,
							image: "http://placeimg.com/640/480/nightlife",
							path: "#",
							release:
								"Sun May 15 2022 00:08:35 GMT+0200 (Central European Summer Time)",
							title: "Jak zwiększyć widoczność swojego biznesu z lokalnym SEO?",
						},
						{
							button: "read",
							excerpt: `Internet stał się w XXI wieku podstawowym narzędziem do pozyskiwania klientów. W związku z tym SEO lokalne jest ważnym elementem marketingu każdego biznesu. SEO lokalne może pomóc twojej firmie w zwiększeniu widoczności i uzyskaniu wyższego wyniku w wynikach wyszukiwania.`,
							image: "http://placeimg.com/640/480/nightlife",
							path: "#",
							release:
								"Sun May 15 2022 00:08:35 GMT+0200 (Central European Summer Time)",
							title: "Jak zwiększyć widoczność swojego biznesu z lokalnym SEO?",
						},
						{
							button: "read",
							excerpt: `Internet stał się w XXI wieku podstawowym narzędziem do pozyskiwania klientów. W związku z tym SEO lokalne jest ważnym elementem marketingu każdego biznesu. SEO lokalne może pomóc twojej firmie w zwiększeniu widoczności i uzyskaniu wyższego wyniku w wynikach wyszukiwania.`,
							image: "http://placeimg.com/640/480/nightlife",
							path: "#",
							release:
								"Sun May 15 2022 00:08:35 GMT+0200 (Central European Summer Time)",
							title: "Jak zwiększyć widoczność swojego biznesu z lokalnym SEO?",
						},
					],
					path: "#",
					title: "All news",
				}}
				welcomeCard={{
					image:
						"https://images.unsplash.com/photo-1568996550951-e7ca512c1391?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
					title: "Hello in RadWEB CMS",
				}}
				recent={{
					items: [
						{
							release:
								"Thu Jan 18 2024 18:53:58 GMT+0100 (Central European Standard Time)",
							status: "created",
							title:
								"Robots.txt — Jak przejąć kontrolę nad robotami wyszukiwarek?",
							type: "article",
						},
						{
							release:
								"Thu Jan 18 2024 18:53:58 GMT+0100 (Central European Standard Time)",
							status: "created",
							title: "Czym jest HTML? - historia i rozwój",
							type: "article",
						},
						{
							release:
								"Thu Jan 18 2024 18:53:58 GMT+0100 (Central European Standard Time)",
							status: "created",
							title: "Systemy nawadniania – z jakich elementów się składają?",
							type: "article",
						},
						{
							release:
								"Thu Jan 18 2024 18:53:58 GMT+0100 (Central European Standard Time)",
							status: "created",
							title:
								"Nawadnianie ogrodów działkowych – jaki system podlewania wybrać?",
							type: "article",
						},
						{
							release:
								"Thu Jan 18 2024 18:53:58 GMT+0100 (Central European Standard Time)",
							status: "created",
							title: "Czym jest HTML? - historia i rozwój",
							type: "article",
						},
						{
							release:
								"Thu Jan 18 2024 18:53:58 GMT+0100 (Central European Standard Time)",
							status: "created",
							title: "Systemy nawadniania – z jakich elementów się składają?",
							type: "article",
						},
						{
							release:
								"Thu Jan 18 2024 18:53:58 GMT+0100 (Central European Standard Time)",
							status: "created",
							title:
								"Nawadnianie ogrodów działkowych – jaki system podlewania wybrać?",
							type: "article",
						},
					],
				}}
			/>
		</main>
	);
};

export default Page;
