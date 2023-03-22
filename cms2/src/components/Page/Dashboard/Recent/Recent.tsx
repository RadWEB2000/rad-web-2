import { getDate } from "./../../../../lib/functions/getDate";
import { ReactElement } from "react";

interface iRecentItem {
	release: string | Date;
	status: "created" | "published" | "updated";
	title: string;
	type: "article" | "site";
}

export interface iRecent {
	items: iRecentItem[];
}

const RecentItem = ({
	release,
	status,
	title,
	type,
}: iRecentItem): ReactElement => {
	return (
		<li>
			<h4>{title}</h4>
			<p>{status}</p>
			<p>{type}</p>
			<p>{`${getDate(release).day}/${getDate(release).month}/${
				getDate(release).year
			}`}</p>
		</li>
	);
};

const Recent = ({ items }: iRecent): ReactElement => {
	return (
		<div>
			<ul>
				{items.slice(0, 5).map(({ release, status, title, type }) => (
					<RecentItem
						key={`${title}- ${status}-${type}`}
						release={release}
						status={status}
						title={title}
						type={type}
					/>
				))}
			</ul>
		</div>
	);
};
export default Recent;
