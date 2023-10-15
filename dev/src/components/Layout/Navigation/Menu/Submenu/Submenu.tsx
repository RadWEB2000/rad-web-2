import { tMenuItem } from "@ts/types";
import MenuItem from "@layout/Navigation/Menu/MenuItem";
import setState from "@lib/setState";

type tSubmenu = {
	label: string;
	submenu: tMenuItem[];
	uri: string;
};

export default function Submenu(props: tSubmenu) {
	const { label, submenu, uri } = props;
	const [isOpen, setIsOpen] = setState<boolean>(false);
	return (
		<li>
			<MenuItem label={label} type="expand" uri={uri} />
			{isOpen && (
				<ul>
					{submenu.map(({ label, uri }, index: number) => {
						return (
							<MenuItem label={label} key={index} type="submenu" uri={uri} />
						);
					})}
				</ul>
			)}
		</li>
	);
}
