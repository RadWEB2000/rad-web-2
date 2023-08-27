import { tImage } from "./types";

export interface iAuthor {
	author: {
		fullname: string;
		image: tImage;
		locations?: string[];
		jobs?: string[];
		uri: string;
	};
}

export interface iImage {
	image: tImage;
}

export interface iLink {
	label: string;
	rel?:
		| "index follow"
		| "noindex nofollow"
		| "noindex follow"
		| "index nofollow";
	uri: string;
}
