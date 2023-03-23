const yearOfBornInternet = () => {
	const a = new Date().getFullYear();
	const b = 1969;
	return a - b;
};
export const blogpage = {
	pl: {
		main: {
			seo: {
				image: "",
				meta: {
					title: "Blog, poznaj tajniki internetu 📰 - RadWEB",
					description: `Internet jest z nami już od ${yearOfBornInternet()} lat. Od początku XXI ten środek masowego przekazu zdominował inne tradycjne media. Dowiedz się, jak możesz go na swoją korzyść.`,
				},
				og: {
					title: "",
					description: "",
				},
			},
			content: {
				hero: {
					title: "Blog",
					content: `Świat programowania, pozycjonowania - i co może zdziwić - historii mimo częstych rewolucji nadal jest w trakcie ewolucji. W związku z tym należy dokładać wszelkich starań aby być cały czas na bieżąco. Najlepszym miejscem do poznawania ciekawostek z tego świata bezapelacjnie jest blog, a w szczególności blog RadWEB, gdzie poza suchymi informacjami poznasz konkretne zagadnienia w możliwie jak najszerszym kontekście.`,
				},
			},
		},
		subpages: [
			{
				seo: {
					image: "",
					meta: {
						title:
							"Porady i ciekawostki ze świata programowania, blog o programowaniu - RadWEB",
						description: "",
					},
					og: {
						title: "",
						description: "",
					},
				},
				path: "/blog/programowanie",
				slug: "programowanie",
				content: {
					hero: {
						title: "Programowanie",
						content: `Programowanie jest jednym z najważniejszych aspektów tworzenia stron internetowych. Bez niego strony internetowe byłyby tylko estetycznymi wizualizacjami, bez funkcjonalności i możliwości interakcji z użytkownikiem. Programowanie stron internetowych pozwala na stworzenie dynamicznej i interaktywnej witryny, która jest w stanie dostosować się do potrzeb użytkownika.
						Tworzenie stron internetowych za pomocą programowania może być skomplikowane, ale jednocześnie jest to proces pełen wyzwań i nagrody. W RadWEB wiemy, jak ważne jest, aby tworzenie stron internetowych było wygodne dla naszych klientów, dlatego nasz zespół składa się z doświadczonych programistów, którzy są gotowi pomóc naszym klientom w realizacji ich wizji.
						Programowanie stron internetowych to nie tylko tworzenie kodu, ale również zrozumienie potrzeb użytkownika i jego oczekiwań. Nasz zespół w RadWEB jest zawsze gotów do wsłuchania się w potrzeby naszych klientów i stworzenia rozwiązania, które będzie dostosowane do ich potrzeb.
						Nasza wiedza i doświadczenie w zakresie programowania pozwala nam stworzyć strony internetowe, które są nie tylko estetyczne, ale również funkcjonalne i efektywne. Nasze strony internetowe są zawsze zoptymalizowane pod kątem wydajności i dostępności, co pozwala naszym klientom na uzyskanie najlepszych możliwych rezultatów.`,
					},
				},
			},
			{
				seo: {
					image: "",
					meta: {
						title: "Poznaj tajniki pozycjonowania, blog o SEO - RadWEB",
						description: "",
					},
					og: {
						title: "",
						description: "",
					},
				},
				path: "/blog/pozycjonowanie",
				slug: "pozycjonowanie",
				content: {
					hero: {
						title: "Tajniki SEO",
						content: `Wysoka pozycja w wynikach wyszukiwania to klucz do sukcesu każdej strony internetowej. Aby osiągnąć taki sukces, trzeba zrozumieć, jak wyszukiwarki, takie jak Google, indeksują i oceniają strony internetowe.SEO to proces, który polega na dostosowaniu strony internetowej do wymagań i algorytmów wyszukiwarek, aby zwiększyć jej widoczność i uzyskać lepsze wyniki w wynikach wyszukiwania. W tym celu można wykorzystać różne techniki, takie jak optymalizacja treści, ulepszanie struktury strony i linkowanie zewnętrzne. Zespół RadWEB jest doświadczony w tej dziedzinie i oferuje swoim klientom profesjonalne usługi pozycjonowania stron internetowych, aby pomóc im osiągnąć sukces w sieci.`,
					},
				},
			},
			{
				seo: {
					image: "",
					meta: {
						title: "",
						description: "",
					},
					og: {
						title: "",
						description: "",
					},
				},
				path: "/blog/reklamy-w-google",
				slug: "reklamy-w-google",
				content: {
					hero: {
						title: "Reklamy Google",
						content: ``,
					},
				},
			},
		],
	},
};
