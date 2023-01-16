import Image from "next/image";
import Link from "next/link";
import styles from "./Author.module.scss";
import { IntAuthor } from "./interface";
import { ReactElement } from "react";
const Author = ({ fullname, image, jobs, path }: IntAuthor): ReactElement => {
	return (
		<div className={styles.wrapper}>
			<div>
				<figure>
					<Image
						alt={`${fullname.firstname} ${fullname.lastname}`}
						fill
						src={image}
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
						title={`${fullname.firstname} ${fullname.lastname}`}
						quality={90}
					/>
				</figure>
			</div>
			<section>
				<Link href={path} rel="index follow">
					<h2>{`${fullname.firstname} ${fullname.lastname}`}</h2>
				</Link>
				<p
					dangerouslySetInnerHTML={{
						__html: "Front-end & Web developer, specjalista SEO/SEM",
					}}
				/>
			</section>
		</div>
	);
};
export default Author;
