export type tBrand = {
	label: string;
	uri: string;
};

export type tMobileNavigation = {
	menu: {
		icon: JSX.Element;
		label: string;
		uri: string;
	}[];
};

export type tNavigationMenuItem = {
	closeMenu?: any;
	label: string;
	uri: string;
} & (
	| {
			handleExpand?: any;
			theme: 'expand';
	  }
	| {
			theme: 'regular';
	  }
	| {
			closeSubmenu?: any;
			theme: 'submenu';
	  }
);

export type tSubmenu = {
	label: string;
	uri: string;
	submenu?: tSubmenu[] | null;
};

export type tMenuArray = {
	label: string;
	uri: string;
	submenu?: tSubmenu[] | null;
};

export type tMenu = {
	menu: {
		label: string;
		uri: string;
		submenu?: tSubmenu[] | null;
	}[];
};

export type tNavigation = {
	brand: tBrand;
	menu: tMenu;
};
