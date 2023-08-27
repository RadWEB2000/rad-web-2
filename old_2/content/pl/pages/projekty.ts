import { iSeo } from "@default/src/ts/interfaces";

interface iProjectsPage {
	seo: iSeo;
	hero: {
		title: string;
		image: string;
		content: string;
	};
}

const projectsPage: iProjectsPage = {
	seo: {
		image:
			"https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		metaDescription:
			"Szukasz profesjonalistów i pasjonatów, którzy odkryją przed Tobą co możesz zyskać wchodząc w świat internetu? Sprawdź nas! ✌️",
		metaTitle: "Projekty i realizacje komercyjne dla klientów - RadWEB",
		openGraphDescription:
			"Poznaj tajniki SEO i tworzenia stron internetowych. Zapraszamy do sprawdzenia naszego bloga.",
		openGraphTitle: "Projekty i realizacje komercyjne - RadWEB",
		website: "https://rad-web.vercel.app/projekty",
		articleSection: "Projekty i realizacje serwisu RadWEB",
		canonical: "https://rad-web.vercel.app/projekty",
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
				url: "https://rad-web.vercel.app/projekty",
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
		content: `Praktyka czyni mistrza - te słowa jasno określają rozwój RadWEB. Znajdziesz tutaj realizacje z zakresu tworzenia, pozycjonowania oraz optymalizacji stron internetowych. Tworzę aplikacje od warsty wizualnej oraz serwerowej czyli fachowo mówiąc front-end i back-end. Jestem zaprzyjaźniony z kilkoma jęzkami programowania tj. z JavaScript oraz PHP. Nie oznacza to, że jestem ograniczony jedynie do tych dwóch technologii ponieważ rozwijam się w innych językach programowania takimi jak Ruby czy Python.`,
		image:
			"https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		title: "Projekty i realizacje",
	},
};

export default projectsPage;
