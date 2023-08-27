import styles from "@default/components/Pages/BlogPage/Wrapper/Wrapper.module.scss";
import Articles, {
	iArticles,
} from "@default/components/Pages/BlogPage/Articles/Articles";
import React from "react";
interface iWrapper extends iArticles {
	children?: React.ReactNode;
}

export default function Wrapper({ articles, children }: iWrapper) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.cards}>
				<Articles articles={articles} />
			</div>
			<div className={styles.details}>
				<div className={styles.box}>{children}</div>
			</div>
		</div>
	);
}
