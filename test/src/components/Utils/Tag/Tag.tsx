import Link from "next/link";

export type tTag = {
	label: string;
	uri: string;
	variant?: "article" | "page";
};

export default function Tag({ label, uri, variant }: tTag) {
	return (
		<li data-variant={variant}>
			<Link href={uri}>{label}</Link>
		</li>
	);
}
