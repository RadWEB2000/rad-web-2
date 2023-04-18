import { ReactElement } from "react";
import styles from "./LoginPage.module.scss";

const { wrapper } = styles;

export const LoginPage = ({
	children,
}: {
	children: ReactElement | ReactElement[];
}) => {
	return (
		<div className={wrapper}>
			<div>{children}</div>
		</div>
	);
};
