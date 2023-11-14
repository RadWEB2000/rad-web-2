import Link from "next/link";

export type tBrand = {
	label: string;
	uri: string;
};

export default function Brand(props: tBrand) {
	return (
		<Link dangerouslySetInnerHTML={{ __html: props.label }} href={props.uri} />
	);
}
