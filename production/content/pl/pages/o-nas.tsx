import { BsBriefcase } from "react-icons/bs";
import { RiPlantLine } from "react-icons/ri";
import { GiLightHelm } from "react-icons/gi";
import { iSeo } from "@default/src/ts/interfaces";

interface iAboutUs {
	hero: {
		title: string;
		image: string;
		content: string;
	};
	mission: {
		title: string;
		content: {
			primary: string;
			secondary?: string;
		};
		cards: {
			icon: JSX.Element;
			title: string;
		}[];
	};
	team: {
		title: string;
		content: string;
	};
	seo: iSeo;
}

const aboutUs: iAboutUs = {
	seo: {
		image:
			"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		metaDescription:
			"Szukasz profesjonalistów i pasjonatów, którzy odkryją przed Tobą co możesz zyskać wchodząc w świat internetu? Sprawdź nas! ✌️",
		metaTitle: "Poznaj specjalistów od internetu, zespoł RadWEB - RadWEB",
		openGraphDescription: "Młodzi i głodni sukcesów. Poznaj zespół RadWEB!",
		openGraphTitle: "Poznaj swoich specjalistów",
		website: "https://rad-web.vercel.app/o-nas",
		articleSection: "Zespół RadWEB",
		canonical: "https://rad-web.vercel.app/o-nas",
		modifiedTime:
			"Mon Jun 26 2023 10:09:37 GMT+0200 (czas środkowoeuropejski letni)",
		publishedTime:
			"Mon Jun 26 2023 10:09:37 GMT+0200 (czas środkowoeuropejski letni)",
		robots: "index follow",
		schema: [
			{
				"@context": "https://schema.org/",
				"@type": "WebSite",
				name: "RadWEB",
				url: "https://rad-web.vercel.app/o-nas",
			},
			{
				"@context": "https://schema.org",
				"@type": "LocalBusiness",
				name: "RadWEB",
				image:
					"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
				"@id": "https://rad-web.vercel.app",
				url: "https://rad-web.vercel.app",
				telephone: "+48794100413",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Donatowo 53",
					addressLocality: "Czempiń",
					postalCode: "64-020",
					addressCountry: "PL",
				},
				geo: {
					"@type": "GeoCoordinates",
					latitude: 52.0967,
					longitude: 16.8819058,
				},
				openingHoursSpecification: {
					"@type": "OpeningHoursSpecification",
					dayOfWeek: [
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday",
						"Sunday",
					],
					opens: "00:00",
					closes: "23:59",
				},
				sameAs: [
					"https://www.facebook.com/radoslaw.adamczyk.2000",
					"https://www.instagram.com/radoslaw.adamczyk.2000/",
					"https://www.youtube.com/channel/UCOHB1fpEKwxhjCEDNgVLEog",
					"https://github.com/RadoslawAdamczyk2000",
					"https://rad-web.vercel.app",
					"https://www.linkedin.com/in/rados%C5%82aw-adamczyk-853948195/",
				],
			},
			{
				"@context": "https://schema.org",
				"@type": "Corporation",
				name: "RadWEB",
				alternateName: "RadWEB",
				url: "https://rad-web.vercel.app",
				contactPoint: {
					"@type": "ContactPoint",
					telephone: "794100413",
					areaServed: "PL",
					availableLanguage: ["en", "Polish"],
				},
				sameAs: [
					"https://www.facebook.com/radoslaw.adamczyk.2000",
					"https://www.instagram.com/radoslaw.adamczyk.2000/",
					"https://www.youtube.com/channel/UCOHB1fpEKwxhjCEDNgVLEog",
					"https://www.linkedin.com/in/rados%C5%82aw-adamczyk-853948195/",
					"https://github.com/RadoslawAdamczyk2000",
					"https://rad-web.vercel.app",
				],
			},
		],
		siteName: "RadWEB",
		type: "website",
	},
	hero: {
		image:
			"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		title: "O nas",
		content: `Praktyka czyni mistrza - te słowa jasno określają rozwój RadWEB. Znajdziesz tutaj realizacje z zakresu tworzenia, pozycjonowania oraz optymalizacji stron internetowych. Tworzę aplikacje od warsty wizualnej oraz serwerowej czyli fachowo mówiąc front-end i back-end. Jestem zaprzyjaźniony z kilkoma jęzkami programowania`,
	},
	mission: {
		cards: [
			{
				icon: <GiLightHelm />,
				title: "Uczciwość",
			},
			{
				icon: <BsBriefcase />,
				title: "Profesjonalizm",
			},
			{
				icon: <RiPlantLine />,
				title: "Rozwój",
			},
		],
		content: {
			primary: `W RadWEB wierzymy, że nasz sukces zależy od naszej uczciwości, profesjonalizmu i ciągłego rozwoju. Nasz zespół składa się z ludzi, którzy dążą do doskonałości w każdym aspekcie swojej pracy i są zaangażowani w dostarczanie naszym klientom najlepszych możliwych rozwiązań.`,
			secondary: `Jesteśmy dumni z naszych usług w zakresie tworzenia stron internetowych, pozycjonowania stron internetowych, projektowania stron internetowych, copywritingu i videomaking. Nasze projekty są zawsze dostosowane do potrzeb naszych klientów i są tworzone z najwyższą starannością.`,
		},
		title: "Misja RadWEB",
	},
	team: {
		content: `RadWEB znajdziesz w wielu lokalizacjach w Polsce, w tym w Białej Podlaskiej, Bydgoszczy, Krakowie, Łodzi, Poznaniu, Warszawie i Wrocławiu. Dzięki temu jesteśmy w stanie świadczyć nasze usługi na terenie całego kraju, dostarczając naszym klientom nie tylko wysokiej jakości projekty, ale również pełen zakres usług, w tym pozycjonowanie serwisów internetowych, copywriting oraz tworzenie treści wideo.`,
		title: "Zespół RadWEB",
	},
};

export default aboutUs;
