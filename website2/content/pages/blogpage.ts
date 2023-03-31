import { iSeoPage } from "../../src/ts/interface";

interface iBlogpageSection {
	seo: iSeoPage;
	path: string;
	slug: string;
	content: {
		content: string;
		title: string;
	};
}

interface iBlogpage {
	pl: {
		page: iBlogpageSection;
		subpage: {
			programming: iBlogpageSection;
			seo: iBlogpageSection;
		};
	};
}

export const blogpage: iBlogpage = {
	pl: {
		page: {
			seo: {
				image:
					"https://cdn.pixabay.com/photo/2017/04/06/19/37/sculptures-2209152_960_720.jpg",
				meta: {
					description: `Internet jest z nami już od ${
						new Date().getFullYear() - 1969
					} lat. Od początku XXI ten środek masowego przekazu zdominował inne tradycjne media. Dowiedz się, jak możesz go na swoją korzyść.`,
					title: "Blog, poznaj tajniki internetu 📰 - RadWEB",
				},
				og: {
					description:
						"Internet jest z nami już od ${new Date().getFullYear() - 1969} lat. Od początku XXI ten środek masowego przekazu zdominował inne tradycjne media. Dowiedz się, jak możesz go na swoją korzyść.",
					title: "Blog, poznaj tajniki internetu 📰 - RadWEB",
				},
			},
			path: "/blog",
			slug: "blog",
			content: {
				title: "Blog",
				content:
					"Świat programowania, pozycjonowania - i co może zdziwić - historii mimo częstych rewolucji nadal jest w trakcie ewolucji. W związku z tym należy dokładać wszelkich starań aby być cały czas na bieżąco. Najlepszym miejscem do poznawania ciekawostek z tego świata bezapelacjnie jest blog, a w szczególności blog RadWEB, gdzie poza suchymi informacjami poznasz konkretne zagadnienia w możliwie jak najszerszym kontekście.",
			},
		},
		subpage: {
			programming: {
				seo: {
					image:
						"https://cdn.pixabay.com/photo/2018/01/18/23/02/laptop-3091427_960_720.jpg",
					meta: {
						description:
							"Znajdziesz tutaj wiele ciekawych artykułów na temat różnych języków programowania, technologii i narzędzi używanych w branży IT. Sprawdź sam!",
						title:
							"Porady i ciekawostki ze świata programowania, blog o programowaniu - RadWEB",
					},
					og: {
						description:
							"Znajdziesz tutaj wiele ciekawych artykułów na temat różnych języków programowania, technologii i narzędzi używanych w branży IT. Sprawdź sam!",
						title:
							"Porady i ciekawostki ze świata programowania, blog o programowaniu - RadWEB",
					},
				},
				path: "/blog/programowanie",
				slug: "programowanie",
				content: {
					title: "Programowanie",
					content: `Programowanie jest jednym z najważniejszych aspektów tworzenia stron internetowych. Bez niego strony internetowe byłyby tylko estetycznymi wizualizacjami, bez funkcjonalności i możliwości interakcji z użytkownikiem. Programowanie stron internetowych pozwala na stworzenie dynamicznej i interaktywnej witryny, która jest w stanie dostosować się do potrzeb użytkownika.
                    Tworzenie stron internetowych za pomocą programowania może być skomplikowane, ale jednocześnie jest to proces pełen wyzwań i nagrody. W RadWEB wiemy, jak ważne jest, aby tworzenie stron internetowych było wygodne dla naszych klientów, dlatego nasz zespół składa się z doświadczonych programistów, którzy są gotowi pomóc naszym klientom w realizacji ich wizji.
                    Programowanie stron internetowych to nie tylko tworzenie kodu, ale również zrozumienie potrzeb użytkownika i jego oczekiwań. Nasz zespół w RadWEB jest zawsze gotów do wsłuchania się w potrzeby naszych klientów i stworzenia rozwiązania, które będzie dostosowane do ich potrzeb.
                    Nasza wiedza i doświadczenie w zakresie programowania pozwala nam stworzyć strony internetowe, które są nie tylko estetyczne, ale również funkcjonalne i efektywne. Nasze strony internetowe są zawsze zoptymalizowane pod kątem wydajności i dostępności, co pozwala naszym klientom na uzyskanie najlepszych możliwych rezultatów.`,
				},
			},
			seo: {
				seo: {
					image:
						"https://cdn.pixabay.com/photo/2015/05/18/23/19/gesture-772977_960_720.jpg",
					meta: {
						description:
							"Blog o SEO to źródło wartościowej wiedzy dla każdego, kto chce lepiej pozycjonować swoją stronę w wynikach wyszukiwania. Z nami zrozumiesz mechanizmy i strategie SEO. Zapraszamy!",
						title: "Poznaj tajniki pozycjonowania, blog o SEO - RadWEB",
					},
					og: {
						description:
							"Blog o SEO to źródło wartościowej wiedzy dla każdego, kto chce lepiej pozycjonować swoją stronę w wynikach wyszukiwania. Z nami zrozumiesz mechanizmy i strategie SEO. Zapraszamy!",
						title: "Poznaj tajniki pozycjonowania, blog o SEO - RadWEB",
					},
				},
				path: "/blog/pozycjonowanie",
				slug: "pozycjonowanie",
				content: {
					title: "Tajniki SEO",
					content:
						"Wysoka pozycja w wynikach wyszukiwania to klucz do sukcesu każdej strony internetowej. Aby osiągnąć taki sukces, trzeba zrozumieć, jak wyszukiwarki, takie jak Google, indeksują i oceniają strony internetowe.SEO to proces, który polega na dostosowaniu strony internetowej do wymagań i algorytmów wyszukiwarek, aby zwiększyć jej widoczność i uzyskać lepsze wyniki w wynikach wyszukiwania. W tym celu można wykorzystać różne techniki, takie jak optymalizacja treści, ulepszanie struktury strony i linkowanie zewnętrzne. Zespół RadWEB jest doświadczony w tej dziedzinie i oferuje swoim klientom profesjonalne usługi pozycjonowania stron internetowych, aby pomóc im osiągnąć sukces w sieci.",
				},
			},
		},
	},
};
