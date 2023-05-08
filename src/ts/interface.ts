export interface iArticle {
	slug: string;
	category: string;
	release: string;
	excerpt: string;
	image: string;
	title: string;
	lang: string;
}

export interface iProject {
	category: string;
	excerpt: string;
	image: string;
	path: string;
	release: string;
	title: string;
}

export interface iSectionPage {
	button?: {
		path: string;
		title: string;
	};
	content: string;
	title: string;
}

export interface iSeoPage {
	image: string;
	meta: {
		description: string;
		title: string;
	};
	og: {
		description: string;
		title: string;
	};
}
