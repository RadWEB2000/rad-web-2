import { tImage, tMenuItem } from "@ts/types";

export interface iQueryNavigation {
	brand: {
		link: string;
		logo: tImage;
	};
	menu: {
		label: string;
		uri: string;
		submenu: tMenuItem[] | null;
	}[];
}

export interface iQuerySettings {
	generalSettingsDescription: string;
	generalSettingsLanguage: string;
}
