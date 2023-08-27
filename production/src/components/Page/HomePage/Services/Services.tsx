import Card from "@default/components/Page/HomePage/Services/Card/Card";
import styles from "@default/components/Page/HomePage/Services/Services.module.scss";

type tServices = {
	cards: {
		button: null | string;
		color: string;
		image: {
			altText: string;
			sourceUrl: string;
			title: string;
		};
		title: string;
		uri: null | string;
	}[];
};

export default function Services({ cards }: tServices) {
	return (
		<div className={styles.wrapper}>
			{cards.map(({ button, color, image, title, uri }) => {
				return (
					<Card
						color={color}
						button={button}
						image={image}
						key={title}
						title={title}
						uri={uri}
					/>
				);
			})}
		</div>
	);
}
