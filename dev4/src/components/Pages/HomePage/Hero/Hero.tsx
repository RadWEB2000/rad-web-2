import HeroButton from "u_buttons/HeroButton";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

type tHero = {
	buttons: NonNullable<{
		label: string;
		uri: string;
	}>[];
	slogan: string;
	title: string;
};

export default function Hero(props: tHero) {
	return (
		<div>
			<div>
				<header>
					<h1 dangerouslySetInnerHTML={{ __html: props.title }} />
					<h2 dangerouslySetInnerHTML={{ __html: props.slogan }} />
				</header>
				<ul>
					{props.buttons?.map((item, index) => {
						return <HeroButton key={index} label={item.label} uri={item.uri} />;
					})}
				</ul>
			</div>
			<div>
				<DeviceFrameset device="MacBook Pro" color="silver">
					<div
						style={{
							width: "100%",
							height: 0,
							paddingBottom: "72%",
							position: "relative",
						}}
					>
						<iframe
							src="https://giphy.com/embed/JqmupuTVZYaQX5s094"
							width="100%"
							height="100%"
							style={{ position: "absolute" }}
							className="giphy-embed"
							allowFullScreen
						/>
					</div>
				</DeviceFrameset>
			</div>
		</div>
	);
}
