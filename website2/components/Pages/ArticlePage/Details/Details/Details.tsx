import Author from "../Author/Author";
import styles from "./Details.module.scss";
import { IntDetails } from "./interface";
import { ReactElement } from "react";
const Details = ({ author }: IntDetails): ReactElement => {
	return (
		<>
			<aside className={styles.wrapper}>
				<Author
					fullname={{
						firstname: author.fullname.firstname,
						lastname: author.fullname.lastname,
					}}
					image={author.image}
					jobs={author.image}
					path={author.path}
				/>
			</aside>
		</>
	);
};
export default Details;
