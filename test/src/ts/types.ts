import { StaticImageData } from "next/image";

export type tContactElement = {
	label: string;
	type: "email" | "phone";
	uri: string;
};

export type tImage = {
	alt: string;
	src: string | StaticImageData;
	title?: string;
};

export type tLink = {
	label: string;
	uri: string;
	rel?:
		| "index follow"
		| "noindex nofollow"
		| "noindex follow"
		| "index nofollow";
};

export type tAuthorCard = {
	fullname: string;
	image: tImage;
	uri: string;
};

export type tSocial = {
	url: string;
};
