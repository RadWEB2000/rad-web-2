import Link from 'next/link';
import { tMobileNavigation } from 'ts/types';
import styles from 'layout/MobileNavigation/MobileNavigation.module.scss';
export default function MobileNavigation(props: tMobileNavigation) {
	const { menu } = props;
	return (
		<menu className={styles.wrapper}>
			{menu.map(({ icon, label, uri }) => {
				return (
					<li
						key={label}
						title={label}
					>
						<Link href={uri}>{icon}</Link>
					</li>
				);
			})}
		</menu>
	);
}
