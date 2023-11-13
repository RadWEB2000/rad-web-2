import { tNavigation } from 'ts/types';
import Brand from 'layout/Navigation/Brand';
import Menu from 'layout/Navigation/Menu';

export default function Navigation(props: tNavigation) {
	const {
		brand,
		menu: { menu },
	} = props;
	return (
		<nav>
			<div className="brand">
				<Brand
					label={brand.label}
					uri={brand.uri}
				/>
			</div>
			<div className="menu">
				<Menu menu={menu} />
			</div>
		</nav>
	);
}
