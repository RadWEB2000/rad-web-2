import Hero from "pages/HomePage/Hero";

export default function HomePage() {
	return (
		<div>
			<Hero
				buttons={[
					{
						label: "Blog",
						uri: "#",
					},
					{
						label: "Kontakt",
						uri: "#",
					},
				]}
				image={{
					altText: "RadWEB Work",
					sourceUrl: "/giphy.gif",
					title: "RadWEB Promoted Video",
				}}
				slogan="Odkryj internet<br/>na nowo"
				title="Rad<br/>WEB"
			/>
		</div>
	);
}
