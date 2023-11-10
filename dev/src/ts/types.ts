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

export type tMenu = {
	menu: {
		label: string;
		uri: string;
		submenu: tMenuItem[] | null;
	}[];
};

export type tMenuItem = {
	label: string;
	uri: string;
};

export type tNavigation = {
	brand: tBrand;
	menu: {
		label: string;
		uri: string;
		submenu: tMenuItem[] | null;
	}[];
};

export type tSubmenu = {
	label: string;
	submenu: tMenuItem[];
	uri: string;
};
