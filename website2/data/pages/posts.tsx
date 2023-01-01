interface intPosts {
	en: any;
	es: any;
	pl: {
		cards: {
			category: "programowanie" | "pozycjonowanie" | "copywriting" | "ads";
			date: string;
			excerpt: string;
			image: string;
			path: string;
			title: string;
			variant: "programming" | "seo" | "copywriting" | "ads";
		}[];
	};
}
export const posts: intPosts = {
	en: {},
	es: {},
	pl: {
		cards: [
			{
				category: "programowanie",
				date: "2022-10-02",
				excerpt:
					"Roboty wyszukiwarek internetowych pracują dzień i noc, jednak czy można je kontrolować?",
				image:
					"https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
				path: "/blog/programowanie/robots-txt-jak-przejac-kontrole-nad-robotami-wyszukiwarek",
				title: "Robots.txt — Jak przejąć kontrolę nad robotami wyszukiwarek?",
				variant: "programming",
			},
			{
				category: "programowanie",
				date: "2022-06-05",
				excerpt:
					"Najczęściej używanymi systemami operacyjnymi są Mac OS, Linux oraz Windows. Windows jest najpoplarniejszy, ale dlaczego",
				image:
					"https://images.unsplash.com/photo-1642176849879-92f85770f212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
				path: "/blog/programowanie/fenomen-windowsa",
				title: "Fenomen Windowsa",
				variant: "programming",
			},
			{
				category: "programowanie",
				date: "2022-04-12",
				excerpt:
					"Zakładam, że w Twoich myślach wielokrotnie przewijał się pomysł własnej strony internetowej.",
				image:
					"https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
				path: "/blog/programowanie/cechy-dobrej-strony-internetowej",
				title: "Cechy dobrej strony internetowej",
				variant: "programming",
			},
			{
				category: "programowanie",
				date: "2022-04-11",
				excerpt:
					"Istnieje wielki spór nt. tego czy HTML jest językiem programowania, ale jakie były jego początki?.",
				image:
					"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
				path: "/blog/programowanie/czym-jest-html-historia-czy-terazniejszosc",
				title: "Czym jest HTML? - historia czy teraźniejszość?",
				variant: "programming",
			},
		],
	},
};
