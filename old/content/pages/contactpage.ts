import { iSeoPage } from "../../src/ts/interface";

export interface iFormField {
	id: string;
	isTextarea?: boolean;
	label: string;
	max?: number;
	min?: number;
	name: string;
	pattern?: string;
	placeholder: string;
	required?: boolean;
	type?: "text" | "email" | "tel";
}

interface iContactPageElement {
	seo: iSeoPage;
	content: {
		title: string;
		content: string;
	};
	form: {
		fields: {
			fullname: iFormField;
			email: iFormField;
			phone: iFormField;
			subject: iFormField;
			message: iFormField;
		};
		button: string;
		rodo: string;
		title: string;
		alerts: {
			done: string;
			error: string;
			warning: string;
		};
	};
	details: {
		address: string;
		content: string;
		email: {
			address: string;
			name: string;
		};
		nip?: string | number;
		phone: {
			address: string;
			name: string;
		};
		regon?: string | number;
	};
}

interface iContactPage {
	pl: iContactPageElement;
}

export const contactpage: iContactPage = {
	pl: {
		seo: {
			image:
				"https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			meta: {
				title: "Kontakt ze specjalistami - RadWEB",
				description: `Jakiekolwiek działania związane ze stronami www, wymagają ogromnej wiedzy. Działań związanych z internetem nie pozostawiaj przypadkowi. Wybierz specjalistów.`,
			},
			og: {
				title: "Kontakt ze specjalistami - RadWEB",
				description: `Jakiekolwiek działania związane ze stronami www, wymagają ogromnej wiedzy. Działań związanych z internetem nie pozostawiaj przypadkowi. Wybierz specjalistów.`,
			},
		},
		content: {
			title: "Zaufaj specjalistom",
			content: `Jeśli chcesz mieć pewność, że Twoja strona internetowa będzie funkcjonalna, estetyczna i skuteczna, to warto powierzyć ją w ręce specjalistów. W RadWEB mamy wieloletnie doświadczenie w projektowaniu i tworzeniu stron internetowych oraz aplikacji, dlatego jesteśmy w stanie zapewnić Ci najlepsze rozwiązania. Nie tylko realizujemy projekty, ale również dbamy o to, aby strony były jak najlepiej widoczne w wyszukiwarkach internetowych.<br/><br/> Dzięki wiedzy i umiejętnościom naszych specjalistów z zakresu pozycjonowania stron, będziesz mieć pewność, że Twoja strona znajdzie się na pierwszej stronie wyników wyszukiwania.Jeśli chcesz wyróżnić się na tle konkurencji i zaprezentować swoją ofertę w sposób atrakcyjny i przejrzysty, to nasza oferta jest skierowana właśnie do Ciebie. Nasi specjaliści z zakresu copywritingu pomogą Ci stworzyć treści, które zachęcą do skorzystania z Twoich usług.<b>W RadWEB jesteśmy zawsze gotowi do pomocy, dlatego nie wahaj się i napisz do nas już teraz. Z chęcią odpowiemy na wszystkie Twoje pytania i pomożemy Ci w realizacji Twojego projektu. Nie czekaj, skorzystaj z naszej oferty już dziś!</b>`,
		},
		form: {
			fields: {
				fullname: {
					id: "fullname",
					isTextarea: false,
					label: "Imię i nazwisko",
					max: 50,
					min: 10,
					name: "fullname",
					placeholder: "Wpisz tutaj",
					type: "text",
					required: true,
				},
				email: {
					id: "email",
					isTextarea: false,
					label: "Adres e-mail",
					max: 50,
					min: 7,
					name: "email",
					pattern: `[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}`,
					placeholder: "Wpisz tutaj",
					required: true,
					type: "email",
				},
				phone: {
					id: "phone",
					isTextarea: false,
					label: "Numer telefonu",
					max: 18,
					min: 9,
					name: "phone",
					placeholder: "Wpisz tutaj",
					required: true,
					type: "tel",
				},
				subject: {
					id: "subject",
					isTextarea: false,
					label: "Temat",
					min: 10,
					name: "subject",
					placeholder: "Wpisz tutaj",
					required: true,
					type: "text",
				},
				message: {
					id: "message",
					isTextarea: true,
					label: "Wiadomość",
					min: 10,
					name: "message",
					placeholder: "Wpisz tutaj",
					required: true,
				},
			},
			alerts: {
				done: "Wiadomość wysłana",
				error: "Popraw formularz",
				warning: "Poprawnie uzupełnij formularz",
			},
			button: "Wyślij",
			rodo: `Poznałem i akceptuję <a href="/polityka-prywatnosci">Politykę prywatności</a>.`,
			title: "Formularz kontaktowy",
		},
		details: {
			address: `Donatowo 53<br/>64-020 Czempiń`,
			content: `Strony internetowe, aplikacje webowe, pozycjonowanie stron internetowych, copywriting oraz tworzenie treści wideo. Tym zajmuje się RadWEB od 2021 roku. Zaufaj nam, a osiągniesz sukces!`,
			email: {
				address: "radoslaw.adamczyk2000@gmail.com",
				name: "E-mail",
			},
			phone: {
				address: "+48794100413",
				name: "Telefon",
			},
		},
	},
};
