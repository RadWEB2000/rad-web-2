export type tCustomButton = {
	target: string;
	title: string;
	url: string;
};

export type tImage = {
	altText: string;
	sourceUrl: string;
	title: string;
};

export type tRel =
	| 'alternate'
	| 'author'
	| 'bookmark'
	| 'external'
	| 'help'
	| 'license'
	| 'next'
	| 'nofollow'
	| 'noreferrer'
	| 'noopener'
	| 'prev'
	| 'search'
	| 'alternate author'
	| 'external nofollow noreferrer'
	| 'next prev'
	| 'index follow';

export type tPost = {
	author: {
		firstName: string;
		lastName: string;
		image: tImage;
	};
	categories: {
		name: string;
		uri: string;
	}[];
	date: string;
	excerpt: string;
	image: tImage;
	title: string;
	uri: string;
};
