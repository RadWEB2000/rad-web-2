import Card, { tCard } from "@default/components/Page/HomePage/Offer/Card/Card";
import styles from "@default/components/Page/HomePage/Offer/Offer.module.scss";
import ButtonPrimary from "@default/components/Utils/Buttons/ButtonPrimary/ButtonPrimary";
import ContentBox from "@default/components/Utils/ContentBox/ContentBox";

type tOffer = {
	cards: tCard[];
	button: null | string;
	content: string;
	title: string;
	uri: null | string;
};

export default function Offer({ button, cards, content, title, uri }: tOffer) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.box}>
				<section className={styles.details}>
					<header className={styles.title}>
						<h2 dangerouslySetInnerHTML={{ __html: title }} />
					</header>
					<ContentBox content={content} theme="section" variant="dark" />
					{button !== null && uri !== null && (
						<ButtonPrimary
							label="Więcej"
							uri="/"
							theme="tertiary"
							variant="link"
						/>
					)}
				</section>
				<ul className={styles.cards}>
					{cards.map(({ button, content, title, uri }) => {
						return (
							<Card
								button={button}
								content={content}
								key={title}
								title={title}
								uri={uri}
							/>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
