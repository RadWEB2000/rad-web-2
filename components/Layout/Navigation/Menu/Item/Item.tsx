import Link from 'next/link';
import { tNavigationMenuItem } from 'ts/types';
import { BsArrowDownShort } from 'react-icons/bs';

export default function Item(props: tNavigationMenuItem): JSX.Element | null {
	const { closeMenu, label, theme, uri } = props;
	if (theme === 'expand') {
		return (
			<div>
				<Link
					href={uri}
					itemProp="menu"
				>
					{label}
				</Link>
				<button>
					<BsArrowDownShort />
				</button>
			</div>
		);
	} else if (theme === 'regular') {
		return (
			<li id="regural">
				<Link href={uri}>{label}</Link>
			</li>
		);
	} else if (theme === 'submenu') {
		return (
			<li id="regural">
				<Link href={uri}>{label}</Link>
			</li>
		);
	} else return null;
}
