import styles from "./Trailer.module.scss";
import { IntTrailer } from "./interface";
import { ReactElement } from "react";
const Trailer = ({ movie }: IntTrailer): ReactElement => {
	return (
		<figure className={styles.wrapper}>
			<video controls>
				<source src={movie} />
			</video>
		</figure>
	);
};
export default Trailer;
