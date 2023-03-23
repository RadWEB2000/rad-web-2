export interface IntInformations {
	address: string;
	content: string;
	email: {
		address: string;
		name: string;
	};
	nip?: number | string;
	phone: {
		address: string;
		name: string;
	};
	regon?: number | string;
}
