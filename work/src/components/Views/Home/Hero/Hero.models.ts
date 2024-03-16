import { tCustomButton } from 'ts/commons';

export type tHero = {
	title: string;
	slogan: string;
	buttons: tCustomButton[];
	background_image: {
		altText: string;
		sourceUrl: string;
	};
};
