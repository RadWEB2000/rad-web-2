import { iSeoPage } from "../../src/ts/interface";

interface iHomePageSection {
	title: string;
	content: string;
	path: string;
	button: string;
}

interface iHomepageElement {
	seo: iSeoPage;
	hero: {
		title: string;
		content: string;
		buttons: {
			path: string;
			title: string;
		}[];
		services: {
			button: string;
			cards: {
				content: string;
				image: string;
				path: string;
				title: string;
			}[];
		};
	};
	sections: {
		blog: iHomePageSection;
		about_us: iHomePageSection;
		projects: iHomePageSection;
	};
}

interface iHomepage {
	pl: iHomepageElement;
}

export const homepage: iHomepage = {
	pl: {
		seo: {
			image: "/assets/brand/logo.jpg",
			meta: {
				title: "💻RadWEB - strony internetowe, seo, copywriting, videomaking",
				description:
					"Szukasz profesjonalistów i pasjonatów, którzy odkryją przed Tobą co możesz zyskać wchodząc w świat internetu? Sprawdź nas! ✌️",
			},
			og: {
				description: "Odkryj swoich nowych",
				title: "💻 RadWEB - od pasjonatów dla pasjonatów",
			},
		},
		hero: {
			title: "RadWEB — pasjonaci internetu",
			content:
				"Witaj w serwisie RadWEB. Jesteśmy zgranym zespołem, który żyje swoimi pasjami, co bezapelacyjnie stawia nas jako specjalistów w tym, co robimy. Specjalizujemy się w m.in. stronach internetowych, SEO, sem, tworzeniu treści oraz videomakingu. Przekonaj się, że warto nam zaufać!",
			buttons: [
				{
					path: "/blog",
					title: "blog",
				},
				{
					path: "/kontakt",
					title: "kontakt",
				},
			],
			services: {
				button: "więcej",
				cards: [
					{
						content:
							"Strony internetowe są podstawą istnienia w internecie. Z nich się bierze fundamentalna wiedza oraz podstawowe zaufanie do osoby, czy też firmy lub organizacji.",
						image:
							"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80",
						path: "/uslugi/strony-internetowe",
						title: "Strony internetowe",
					},
					{
						content:
							"Pozycjonowanie stron internetowych, potocznie też nazywane SEO to szereg działań mających na celu wywindowanie stron www w wynikach wyszukiwania w Google, Bing, Yahoo.",
						image:
							"https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1251&q=80",
						path: "/uslugi/seo",
						title: "Seo",
					},
					{
						content:
							"Tworzenie treści jest jak tchnienie życia w stronę internetową. Z publikowanych treści jest generowane zainteresowanie robotów wyszukiwarek i użytkowników stroną internetową. Co za tym idzie, treści w stronach internetowych powinny być unikalne oraz przyciągające uwagę użytkownika.",
						image:
							"https://images.unsplash.com/photo-1667056624790-f0e8e391c086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
						path: "/uslugi/copywriting",
						title: "Copywriting",
					},
					{
						content:
							"Wygląd prezentowanych treści na stronie internetowej jest równie ważna, co teksty na niej się znajdujące. Odpowiednio przygotowany projekt graficzny serwisu powinien się znacząco wyróżniać na tle konkurencji. Dlatego też UI/UX strony nie można pozostawiać przypadkowi.",
						image:
							"https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
						path: "/uslugi/ui-ux",
						title: "UI/UX",
					},
				],
			},
		},
		sections: {
			blog: {
				title: "Blog - bądź na bieżąco z internetem",
				content:
					"Świat technologii, tak samo. Jak internet błyskawicznie się rozwija. Codziennie na świecie rodzi się cyfrowa rewolucja. Dowiedz się, jak poprawnie tworzyć strony internetowe dostępne dla każdego. Poznaj tajniki jak być w czołówce wyników wyszukiwania w najpopularniejszych wyszukiwarkach internetowych, dzięki sprawdzonych technikach SEO. Naucz się, jak tworzyć wartościowe treści na stronę, zarówno teksty, jak i materiały wideo. Wyjdź zwycięsko z internetowego pola bitewnego.",
				path: "/blog",
				button: "więcej",
			},
			about_us: {
				title: "O nas - Zespół RadWEB",
				content:
					"Poznaj swoich przyszłych specjalistów, dzięki którym odniesiesz sukces w internecie! Jesteśmy grupą pasjonatów, która codziennie od wielu lat rozwija swoje umiejętności poprzez praktykę.",
				path: "/o-nas",
				button: "więcej",
			},
			projects: {
				title: "Projekty i realizacje komercyjne",
				content:
					"Praktyka czyni mistrza. Dlatego, też, nieustannie poszerzamy portfolio o coraz to nowe projekty realizowane na własne potrzeby i realizacje komercyjne, które w 100% spełniają wymagania usługobiorcy. Do każdego zadania — nie ważne czy to zaprojektowanie, zaprogramowanie lub wypozycjonowanie strony internetowej, czy też tworzenie wysokiej jakości treści albo videomaking — podchodzimy, jak do najważniejszego zlecenia w życiu.",
				path: "/projekty",
				button: "więcej",
			},
		},
	},
};
