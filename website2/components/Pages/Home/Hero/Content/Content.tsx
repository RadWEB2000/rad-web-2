import ButtonPrimary from "../../../../Utilities/Buttons/ButtonPrimary/ButtonPrimary";
import styles from "./Content.module.scss";
import { IntContent } from "./interface";
import { ReactElement } from "react";
const Content = ({ buttons, content, title }: IntContent): ReactElement => {
	return (
		<section className={styles.wrapper}>
			<h1>{title}</h1>
			<p dangerouslySetInnerHTML={{ __html: content }} />
			<ul>
				{buttons.map(({ path, title }) => (
					<ButtonPrimary
						key={`${path} - ${title}`}
						path={path}
						title={title}
						variant="primary"
					/>
				))}
			</ul>
		</section>
	);
};
export default Content;
