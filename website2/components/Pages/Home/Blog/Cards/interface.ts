export interface IntCard {
	category: "programowanie" | "pozycjonowanie" | "copywriting" | "ads";
	date: string;
	excerpt: string;
	image: string;
	path: string;
	title: string;
	variant: "programming" | "seo" | "copywriting" | "ads";
}
export interface IntCards {
	cards: {
		slug: string;
		category: string;
		release: string;
		excerpt: string;
		image: string;
		title: string;
		lang: string;
	}[];
}
