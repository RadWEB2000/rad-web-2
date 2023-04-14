import styles from "./ButtonLoginSocial.module.scss";
import { iLoginSocial } from "@default/src/data/loginSocial";
import { motion } from "framer-motion";
import { ReactElement } from "react";

const { button } = styles;

export const ButtonLoginSocial = ({
	color,
	icon,
	name,
}: iLoginSocial): ReactElement => {
	return (
		<div>
			<motion.button
				className={button}
				style={{
					backgroundColor: color,
				}}
				whileHover={{
					filter: "brightness(115%)",
				}}
				whileTap={{
					scale: 0.98,
				}}
			>
				<i>{icon}</i>
				<span>{name}</span>
			</motion.button>
		</div>
	);
};
