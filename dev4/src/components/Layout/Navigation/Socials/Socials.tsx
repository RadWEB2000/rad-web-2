import Link from "next/link";
import styles from "l_navigation/Socials/Socials.module.scss";

type tItem = {
	name: string;
	icon: JSX.Element;
	url: string;
};

type tSocials = {
	socials: tItem[];
};

function Item(props: tItem) {
	return (
		<li className={styles.container} data-color={props.name}>
			<Link href={props.url}>{props.icon}</Link>
		</li>
	);
}

export default function Socials(props: tSocials) {
	return (
		<ul className={styles.wrapper}>
			{props.socials.map((item, index) => {
				return (
					<Item icon={item.icon} key={index} name={item.name} url={item.url} />
				);
			})}
		</ul>
	);
}
