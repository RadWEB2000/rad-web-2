import { StaticImageData } from "next/image";

export type tBrand = {
	image: tImage;
	uri: string;
};

export type tImage = {
	altText: string;
	sourceUrl: string | StaticImageData;
	title: string;
};
