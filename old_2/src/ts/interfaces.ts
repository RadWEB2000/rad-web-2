export interface iSeo {
	metaTitle: string;
	metaDescription: string;
	openGraphTitle: string;
	openGraphDescription: string;
	image: string;
	canonical?: string;
	robots?:
		| "index follow"
		| "noindex follow"
		| "index nofollow"
		| "noindex nofollow"
		| "noindex"
		| "nofollow"
		| "none"
		| "all"
		| "noarchive"
		| "nosnippet"
		| "notranslate"
		| "noimageindex"
		| "noindex noarchive";
	website: string;
	siteName?: "RadWEB";
	publishedTime?: string;
	modifiedTime?: string;
	articleSection?: string;
	type?: "website" | "article" | "profile" | "place" | "product";
	schema?: any[];
}
