import { ReactElement } from "react";
import { FaHandsHelping } from "react-icons/fa";
import { RiPenNibLine, RiPlantFill } from "react-icons/ri";
import { iSeoPage } from "../../src/ts/interface";

interface iAboutpageElement {
	seo: iSeoPage;
	hero: {
		title: string;
		content: string;
	};
	mission: {
		title: string;
		content: string;
		cards: {
			title: string;
			content: string;
			icon: ReactElement;
		}[];
	};
	team: {
		title: string;
		content: string;
	};
}

interface iAboutpage {
	pl: iAboutpageElement;
}

export const aboutpage: iAboutpage = {
	pl: {
		seo: {
			image:
				"https://images.unsplash.com/photo-1473679408190-0693dd22fe6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			meta: {
				description:
					"Młodzi i głodni sukcesów. Poszukujemy nowych wyzwań, przez które, szkolimy swoje umiejętności. Chcesz być częścią sukcesu? Poznaj specjalistów RadWEB!",
				title: "Poznaj specjalistów od internetu, zespoł RadWEB - RadWEB",
			},
			og: {
				description: "Młodzi i głodni sukcesów. Poznaj zespół RadWEB!",
				title: "Poznaj swoich specjalistów",
			},
		},
		hero: {
			title: "Kim jesteśmy?",
			content: `Jesteśmy grupą znajomych z całej Polski, której głównym zainteresowaniem jest technologia. Realizujemy swoje hobby w zakresie UIi/UX stron internetowych, tworzenia stron internetowych, pozycjonowania serwisów internetowych, copywritingu oraz tworzeniu treści wideo.`,
		},
		mission: {
			title: "Misja RadWEB",
			content: `W RadWEB wierzymy, że nasz sukces zależy od naszej uczciwości, profesjonalizmu i ciągłego rozwoju. Nasz zespół składa się z ludzi, którzy dążą do doskonałości w każdym aspekcie swojej pracy i są zaangażowani w dostarczanie naszym klientom najlepszych możliwych rozwiązań.<br/><br/> Jesteśmy dumni z naszych usług w zakresie tworzenia stron internetowych, pozycjonowania stron internetowych, projektowania stron internetowych, copywritingu i videomaking. Nasze projekty są zawsze dostosowane do potrzeb naszych klientów i są tworzone z najwyższą starannością, aby zapewnić naszym klientom nie tylko świetnie wyglądające strony internetowe, ale również strony internetowe, które działają skutecznie i efektywnie.`,
			cards: [
				{
					icon: <FaHandsHelping />,
					title: "Uczciwość",
					content: `Uczciwość to jedna z cech, która nas wyróżnia. Stawiamy na transparentność oraz na terminową realizację usług.`,
				},
				{
					icon: <RiPenNibLine />,
					title: "Profesjonalizm",
					content: `Wszystkie nasze projekty są realizowane zgodnie z wolą klienta oraz najlepszymi praktykami.`,
				},
				{
					icon: <RiPlantFill />,
					title: "Rozwój",
					content: `Każdy projekt to możliwość rozwoju. Rozwijamy swoje umiejętności codziennie, aby móc oferować najwyższej jakości usługi.`,
				},
			],
		},
		team: {
			title: "Zespół RadWEB",
			content: `RadWEB znajdziesz w wielu lokalizacjach w Polsce, w tym w Białej Podlaskiej, Bydgoszczy, Krakowie, Łodzi, Poznaniu, Warszawie i Wrocławiu. Dzięki temu jesteśmy w stanie świadczyć nasze usługi na terenie całego kraju, dostarczając naszym klientom nie tylko wysokiej jakości projekty, ale również pełen zakres usług, w tym pozycjonowanie serwisów internetowych, copywriting oraz tworzenie treści wideo.<br/><br/>Nasz zespół składa się z doświadczonych projektantów, programistów i marketerów, którzy współpracują ze sobą, aby zapewnić naszym klientom najlepsze możliwe rezultaty. Nasze projekty są zawsze dostosowane do potrzeb naszych klientów i są tworzone zgodnie z najnowszymi standardami branży, co gwarantuje, że nasze strony internetowe są zawsze nowoczesne i skuteczne.`,
		},
	},
};
