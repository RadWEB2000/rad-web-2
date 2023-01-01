import ButtonSecondary from "../../../Buttons/ButtonSecondary/ButtonSecondary";
import Image from "next/image";
import styles from "./BlogCardHomePage.module.scss";
import { IntBlogCardHomePage } from "./interface";
import { ReactElement } from "react";
import Link from "next/link";

const BlogCardHomePage = ({
	button,
	category,
	date,
	image,
	path,
	title,
}: IntBlogCardHomePage): ReactElement => {
	return (
		<li className={styles.wrapper}>
			<figure className={styles.image}>
				<Link className={styles.picture} href={path}>
					<Image
						alt={`${date} - ${title} - ${category}`}
						fill
						src={image}
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
						title={`${date} - ${title} - ${category}`}
					/>
				</Link>
			</figure>
			<section className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<span className={styles.date}>{date}</span>
				<p className={styles.category}>{category}</p>
				<p className={styles.excerpt}>
					{`Sit sint possimus vel qui consectetur eligendi et omnis ut. Asperiores
					quod enim alias nisi est omnis accusamus. Est adipisci rerum
					accusantium qui. Sit sint possimus vel qui consectetur eligendi et omnis ut. Asperiores quod enim alias nisi est omnis accusamus. Est adipisci rerum
					accusantium qui.`.substring(0, 170) + "..."}
				</p>
				<div className={styles.button}>
					<ButtonSecondary path={path} title={button} />
				</div>
			</section>
		</li>
	);
};
export default BlogCardHomePage;
