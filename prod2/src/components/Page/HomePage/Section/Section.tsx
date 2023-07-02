import styles from "./Section.module.scss";
import {
	SectionButton,
	iSectionButton,
} from "@default/src/components/Utils/Buttons/SectionButton/SectionButton";

export interface iSection {
	button?: iSectionButton;
	content: string;
	title: string;
}

export const Section = ({ button, content, title }: iSection) => {
	return (
		<section className={styles.wrapper}>
			<article>
				<header>
					<h2 data-text={title}>{title}</h2>
				</header>
				<p dangerouslySetInnerHTML={{ __html: content }} />
			</article>
			{button && (
				<div>
					<SectionButton label={button.label} uri={button.uri} />
				</div>
			)}
		</section>
	);
};
