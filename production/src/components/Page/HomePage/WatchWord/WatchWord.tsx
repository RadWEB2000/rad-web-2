import styles from "@default/components/Page/HomePage/WatchWord/WatchWord.module.scss";
type tWatchWord = {
	content: string;
};
export default function WatchWord({ content }: tWatchWord) {
	return (
		<div className={styles.wrapper}>
			<section>
				<h3 dangerouslySetInnerHTML={{ __html: content }} />
			</section>
		</div>
	);
}
