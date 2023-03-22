export interface iMenu {
	path: string;
	title: string;
	submenu?: {
		path: string;
		title: string;
	}[];
}

export const menu: iMenu[] = [
	{
		path: "/dashboard",
		title: "Start",
	},
	{
		path: "/dashboard/articles",
		title: "Articles",
		submenu: [
			{
				path: "/dashboard/articles/new",
				title: "New article",
			},
			{
				path: "/dashboard/articles",
				title: "All articles",
			},
		],
	},
	{
		path: "/dashboard/pages",
		title: "Pages",
	},
	{
		path: "/dashboard/modules",
		title: "Modules",
	},
	{
		path: "/dashboard/settings",
		title: "Settings",
	},
	{
		path: "/",
		title: "Log Out",
	},
];
