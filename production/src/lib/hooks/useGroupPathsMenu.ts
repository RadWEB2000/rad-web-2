import { useEffect, useState } from "react";
type tMenuItem = {
	node: {
		path: string;
		label: string;
	};
};

export default function useGroupPathsMenu(data: tMenuItem[]): tMenuItem[][] {
	const [groupedMenu, setGroupedMenu] = useState<tMenuItem[][]>([]);
	useEffect(() => {
		const grouped: Record<string, tMenuItem[]> = {};
		if (data) {
			data.forEach((item) => {
				const paths = item.node.path.split("/").filter((p) => p);
				if (paths.length === 1) {
					grouped[paths[0]] = grouped[paths[0]] || [];
					grouped[paths[0]].push(item);
				} else {
					const parentPath = paths[0];
					grouped[parentPath] = grouped[parentPath] || [];
					grouped[parentPath].push(item);
				}
			});
		}
		const result = Object.values(grouped);
		setGroupedMenu(result);
	}, [data]);

	return groupedMenu;
}
