export interface IntHeroArticlePage {
	breadcrumbs: {
		path: string;
		title: string;
	}[];
	image: string;
	lang: "pl" | "en" | "es";
	readingTime: string | number;
	release: string;
	title: string;
	url: string;
}
