import Link from 'next/link';
import { BiSolidChevronDown } from 'react-icons/bi';

type tItem = {
	label: string;
	uri: string;
} & (
	| {
			theme: 'expand';
	  }
	| {
			theme: 'regural';
	  }
	| {
			level: 1 | 2 | 3;
			theme: 'submenu';
	  }
);

export default function Item(props: tItem) {
	const { label, theme, uri } = props;
	if (theme === 'expand') {
		return (
			<div>
				<Link href={uri}>{label}</Link>
				<button>down</button>
			</div>
		);
	} else if (theme === 'regural') {
		return (
			<li>
				<Link href={uri}>{label}</Link>
			</li>
		);
	} else if (theme === 'submenu') {
		const { level } = props;
		return (
			<li data-level={level}>
				<Link href={uri}>{label}</Link>
			</li>
		);
	}
}
