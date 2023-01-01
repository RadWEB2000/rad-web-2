import ButtonPrimary from "../../Buttons/ButtonPrimary/ButtonPrimary";
import styles from "./SectionHomePage.module.scss";
import { IntSectionHomePage } from "./interface";
import { ReactElement } from "react";
const SectionHomePage = ({
	button,
	content,
	title,
}: IntSectionHomePage): ReactElement => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.title}>{title}</h2>
			<p
				className={styles.content}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
			{button && (
				<div className={styles.button}>
					<ButtonPrimary
						path={button.path}
						title={button.title}
						variant="tertiary"
					/>
				</div>
			)}
		</section>
	);
};
export default SectionHomePage;
