import Link from 'next/link';
import { tBrand } from 'ts/types';

export default function Brand(props: tBrand) {
	const { label, uri } = props;
	return (
		<div itemScope>
			<Link
				dangerouslySetInnerHTML={{ __html: label }}
				href={uri}
				itemProp="brand"
			/>
		</div>
	);
}
