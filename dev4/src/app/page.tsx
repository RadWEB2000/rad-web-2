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
				slogan="Odkryj internet<br/>na nowo"
				title="Rad<br/>WEB"
			/>
		</div>
	);
}
