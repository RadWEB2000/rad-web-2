interface IntCard {
	category: {
		name: string;
		value: string;
	};
	excerpt: string;
	image: string;
	path: string;
	title: string;
}
export interface IntCards {
	cards: IntCard[];
}
