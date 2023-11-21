import HeroButton from "u_buttons/HeroButton";

export default function Hero() {
	return (
		<div>
			<div>
				<header>
					<h1>
						Rad
						<br />
						WEB
					</h1>
					<h2>
						Odkryj internet
						<br />
						na nowo
					</h2>
				</header>
				<ul>
					<HeroButton label="Blog" uri="#" />
					<HeroButton label="Kontakt" uri="#" />
				</ul>
			</div>
		</div>
	);
}
