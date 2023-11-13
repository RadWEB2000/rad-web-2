export type tMenuArrayItem = {
	label: string;
	uri: string;
	submenu?: tMenuArrayItem[] | null;
	submenuTheme?: 'small' | 'big';
	submenuTitles?: {
		[key: string]: string;
	};
};
export const menu: tMenuArrayItem[] = [
	{
		label: 'Start',
		uri: '#',
		submenu: null,
	},
	{
		label: 'O nas',
		uri: '#',
		submenuTheme: 'small',
		submenu: [
			{
				label: 'Radosław Adamczyk',
				uri: '#',
			},
			{
				label: 'Filip Bukowiecki',
				uri: '#',
			},
			{
				label: 'Klaudia Paluch',
				uri: '#',
			},
			{
				label: 'Narzędzia',
				uri: '#',
			},
			{
				label: 'Dołącz do nas',
				uri: '#',
			},
		],
	},
	{
		label: 'Blog',
		uri: '#',
		submenuTheme: 'big',
		submenuTitles: {
			categories: 'Kategorie',
			topics: 'Tematy',
		},
		submenu: [
			{
				label: 'Programowanie',
				uri: '#',
				submenu: [
					{
						label: 'HTML',
						uri: '#',
					},
					{
						label: 'CSS',
						uri: '#',
					},
					{
						label: 'JavaScript',
						uri: '#',
					},
					{
						label: 'TypeScript',
						uri: '#',
					},
					{
						label: 'React',
						uri: '#',
					},
					{
						label: 'PHP',
						uri: '#',
					},
				],
			},
			{
				label: 'Pozycjonowanie',
				uri: '#',
				submenu: [
					{
						label: 'Dostępność',
						uri: '#',
					},
					{
						label: 'Google',
						uri: '#',
					},
					{
						label: 'Bing',
						uri: '#',
					},
					{
						label: 'Ciekawostki',
						uri: '#',
					},
					{
						label: 'Optymalizacja',
						uri: '#',
					},
				],
			},
			{
				label: 'Reklamy PPC',
				uri: '#',
			},
			{
				label: 'Copywriting',
				uri: '#',
			},
			{
				label: 'Videomaking',
				uri: '#',
			},
			{
				label: 'Wszystkie',
				uri: '#',
			},
		],
	},
	{
		label: 'Projekty',
		uri: '#',
		submenu: null,
	},
	{
		label: 'Kontakt',
		uri: '#',
		submenu: null,
	},
];
