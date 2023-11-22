import HeroButton from "u_buttons/HeroButton";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import styles from "pages/HomePage/Hero/Hero.module.scss";
import Image from "next/image";
import { tImage } from "ts/types";

type tHero = {
	buttons: NonNullable<{
		label: string;
		uri: string;
	}>[];
	image: tImage;
	slogan: string;
	title: string;
};

export default function Hero(props: tHero) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<header className={styles.content}>
					<h1
						className={styles.title}
						dangerouslySetInnerHTML={{ __html: props.title }}
					/>
					<h2
						className={styles.slogan}
						dangerouslySetInnerHTML={{ __html: props.slogan }}
					/>
				</header>
				<ul className={styles.buttons}>
					{props.buttons?.map((item, index) => {
						return <HeroButton key={index} label={item.label} uri={item.uri} />;
					})}
				</ul>
			</div>
			<div className={styles.device__wrapper}>
				{props.image && (
					<DeviceFrameset device="HTC One" color="silver">
						<figure className={styles.media}>
							<Image
								alt={props.image.altText}
								fill
								loading="eager"
								src={props.image.sourceUrl}
								style={{
									objectFit: "cover",
									objectPosition: "center",
								}}
								title={props.image.title}
								quality={75}
							/>
						</figure>
					</DeviceFrameset>
				)}
			</div>
		</div>
	);
}
