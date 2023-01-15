import Image from "next/image";
import styles from "./Picture.module.scss";
import { IntPicture } from "./interface";
import { ReactElement } from "react";
const Picture = ({ image, title }: IntPicture): ReactElement => {
	return (
		<figure className={styles.wrapper}>
			<Image
				alt={title}
				fill
				src={image}
				style={{
					objectFit: "cover",
				}}
				title={title}
			/>
		</figure>
	);
};
export default Picture;
