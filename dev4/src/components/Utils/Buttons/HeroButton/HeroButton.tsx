import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

type tHeroButton = {
	label: string;
	uri: string;
};

export default function HeroButton(props: tHeroButton) {
	return (
		<Link href={props.uri}>
			<p>{props.label}</p>
			<i>
				<FaAngleDoubleRight />
			</i>
		</Link>
	);
}
