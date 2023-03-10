export interface IntSeo {
	canonical?: string;
	image: string;
	meta: {
		description: string;
		title: string;
	};
	og: {
		description: string;
		title: string;
		type: "article" | "website" | "blog";
	};
	robots?:
		| "index follow"
		| "noindex nofollow"
		| "index nofollow"
		| "noindex follow"
		| "index"
		| "follow";
}
