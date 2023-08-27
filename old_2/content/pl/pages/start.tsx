import { iSeo } from "@default/src/ts/interfaces";
import {
	AiOutlineFieldTime,
	AiOutlineLineChart,
	AiOutlineUser,
} from "react-icons/ai";

type iSection = {
	title: string;
	content: string;
	button?: {
		label: string;
		uri: string;
	};
};

interface iHome {
	seo: iSeo;
	hero: {
		title: string;
		slogan: string;
		services: string[];
		menu: {
			label: string;
			uri: string;
		}[];
		socials: string[];
	};
	blog: iSection;
	projects: iSection;
	team: iSection;
	statistics: {
		icon: JSX.Element;
		title: string;
		value: number;
		unit?: string;
	}[];
}

const home: iHome = {
	seo: {
		image:
			"https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		metaDescription:
			"Strony internetowe, seo, reklamy google, ui/ux design i wideomaking. To tylko wycinek tego co znajdziesz w RadWEB. Zapraszamy!",
		metaTitle: "💻RadWEB - strony internetowe, seo, copywriting, videomaking",
		openGraphDescription: "Odkryj z nami świat internetowych technologii",
		openGraphTitle: "💻 RadWEB - od pasjonatów dla pasjonatów",
		website: "https://rad-web.vercel.app/",
		articleSection: "Strona główna serwisu RadWEB",
		canonical: "https://rad-web.vercel.app/",
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
				url: "https://rad-web.vercel.app/",
			},
			{
				"@context": "https://schema.org",
				"@type": "LocalBusiness",
				name: "RadWEB",
				image:
					"https://images.unsplash.com/photo-1557992260-ec58e38d363c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
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
		title: "RadWEB",
		slogan: "Odkryj z nami internet",
		services: [
			"programowanie",
			"strony internetowe",
			"seo",
			"google ads",
			"copywriting",
			"ui/ux design",
			"wideomaking",
			"montaż filmów",
		],
		menu: [
			{
				label: "Blog",
				uri: "/blog",
			},
			{
				label: "Realizacje",
				uri: "/projekty",
			},
			{
				label: "Kontakt",
				uri: "/kontakt",
			},
		],
		socials: [
			"https://www.facebook.com/radoslaw.adamczyk.2000",
			"https://www.instagram.com/radoslaw.adamczyk.2000/",
			"https://www.youtube.com/channel/UCOHB1fpEKwxhjCEDNgVLEog",
			"https://github.com/RadoslawAdamczyk2000",
		],
	},
	blog: {
		content: `Świat technologii, tak samo. Jak internet błyskawicznie się rozwija. Codziennie na świecie rodzi się cyfrowa rewolucja. Dowiedz się, jak poprawnie tworzyć strony internetowe dostępne dla każdego. Poznaj tajniki jak być w czołówce wyników wyszukiwania w najpopularniejszych wyszukiwarkach internetowych, dzięki sprawdzonych technikach SEO. Naucz się, jak tworzyć wartościowe treści na stronę, zarówno teksty, jak i materiały wideo. Wyjdź zwycięsko z internetowego pola bitewnego.`,
		title: "Blog",
		button: {
			label: "Wszystkie wpisy",
			uri: "/blog",
		},
	},
	projects: {
		content: `Praktyka czyni mistrza. Dlatego, też, nieustannie poszerzamy portfolio o coraz to nowe projekty realizowane na własne potrzeby i realizacje komercyjne, które w 100% spełniają wymagania usługobiorcy. Do każdego zadania — nie ważne czy to zaprojektowanie, zaprogramowanie lub wypozycjonowanie strony internetowej, czy też tworzenie wysokiej jakości treści albo videomaking — podchodzimy, jak do najważniejszego zlecenia w życiu.`,
		title: "Projekty	i realizacje",
		button: {
			label: "Wszystkie projekty",
			uri: "/projekty",
		},
	},
	team: {
		content: `Poznaj swoich przyszłych specjalistów, dzięki którym odniesiesz sukces w internecie! Jesteśmy grupą pasjonatów, która codziennie od wielu lat rozwija swoje umiejętności poprzez praktykę.`,
		title: "Zespół RADWEB",
		button: {
			label: "Poznaj nas",
			uri: "/o-nas",
		},
	},
	statistics: [
		{
			icon: <AiOutlineFieldTime />,
			title: "Lat doświadczenia",
			value: new Date().getFullYear() - 2016,
			unit: "",
		},
		{
			icon: <AiOutlineUser />,
			title: "Zadowolonych klientów",
			value: 16,
			unit: "",
		},
		{
			icon: <AiOutlineLineChart />,
			title: "Sukcesu",
			value: 100,
			unit: "%",
		},
	],
};

export default home;
