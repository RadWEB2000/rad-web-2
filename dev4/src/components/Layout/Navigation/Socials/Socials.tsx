import Link from "next/link";

type tItem = {
	icon: JSX.Element;
	url: string;
};

type tSocials = {
	socials: tItem[];
};

function Item(props: tItem) {
	return (
		<li>
			<Link href={props.url}>{props.icon}</Link>
		</li>
	);
}

export default function Socials(props: tSocials) {
	return (
		<ul>
			{props.socials.map((item, index) => {
				return <Item icon={item.icon} key={index} url={item.url} />;
			})}
		</ul>
	);
}
