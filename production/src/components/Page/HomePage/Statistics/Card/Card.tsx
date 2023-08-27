import styles from "@default/components/Page/HomePage/Statistics/Card/Card.module.scss";
import { FiUser } from "react-icons/fi";
import { BsClockHistory, BsPersonWorkspace } from "react-icons/bs";
import { SiWebmoney } from "react-icons/si";
export type tCard = {
	description: string;
	icon: "experience" | "clients" | "projects" | string;
	value: number;
};

export default function Card({ icon, description, value }: tCard) {
	const getIcon = (icon: string): JSX.Element => {
		if (icon === "clients") {
			return <FiUser />;
		} else if (icon === "experience") {
			return <BsClockHistory />;
		} else if (icon === "projects") {
			return <BsPersonWorkspace />;
		} else {
			return <SiWebmoney />;
		}
	};

	return (
		<li className={styles.wrapper}>
			<i className={styles.icon}>{getIcon(icon)}</i>
			<p className={styles.value}>{value}</p>
			<h4 className={styles.title}>{description}</h4>
		</li>
	);
}
