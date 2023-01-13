export interface IntSocialsShare {
	url: string;
}
export interface IntHeroArticle extends IntSocialsShare {
	date: string;
	excerpt: string;
	image: string;
	lang: "pl" | "en" | "es";
	time: string;
	title: string;
}
