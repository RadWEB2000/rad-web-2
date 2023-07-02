import { iSeo } from "@default/src/ts/interfaces";

interface iPage {
	hero: {
		content: string;
		image: string;
		title: string;
	};
	fields: {
		label: string;
		id: string;
		max?: number;
		min?: number;
		name: string;
		pattern?: string;
		placeholder: string;
		required?: boolean;
		type?: "text" | "email" | "tel";
		variant: "input" | "textarea";
	}[];
	seo: iSeo;
}

export const page: iPage = {
	hero: {
		content:
			"Jeśli chcesz mieć pewność, że Twoja strona internetowa będzie funkcjonalna, estetyczna i skuteczna, to warto powierzyć ją w ręce specjalistów. W RadWEB mamy wieloletnie doświadczenie w projektowaniu i tworzeniu stron internetowych oraz aplikacji, dlatego jesteśmy w stanie zapewnić Ci najlepsze rozwiązania. Nie tylko realizujemy projekty, ale również dbamy o to, aby strony były jak najlepiej widoczne w wyszukiwarkach internetowych.",
		image:
			"https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
		title: "Kontakt",
	},
	seo: {
		image:
			"https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
		metaDescription:
			"Jakiekolwiek działania związane ze stronami www, wymagają ogromnej wiedzy. Działań związanych z internetem nie pozostawiaj przypadkowi. Wybierz specjalistów.",
		metaTitle: "Kontakt ze specjalistami - RadWEB",
		openGraphDescription:
			"Jakiekolwiek działania związane ze stronami www, wymagają ogromnej wiedzy. Działań związanych z internetem nie pozostawiaj przypadkowi. Wybierz specjalistów.",
		openGraphTitle: "Kontakt ze specjalistami - RadWEB",
		website: "https://rad-web.vercel.app/kontakt",
		articleSection: "Kontakt ze specjalistami serwisu RadWEB",
		canonical: "https://rad-web.vercel.app/kontakt",
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
				url: "https://rad-web.vercel.app/kontakt",
			},
			{
				"@context": "https://schema.org",
				"@type": "LocalBusiness",
				name: "RadWEB",
				image:
					"https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
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
	fields: [
		{
			id: "fullname",
			label: "Imię i nazwisko",
			min: 5,
			name: "fullname",
			placeholder: "Wpisz tutaj imię i nazwisko",
			type: "text",
			required: true,
			variant: "input",
		},
		{
			id: "phone",
			label: "Numer telefonu",
			max: 18,
			min: 9,
			name: "phone",
			placeholder: "Wpisz tutaj numer telefonu",
			type: "tel",
			required: true,
			variant: "input",
		},
		{
			id: "email",
			label: "Adres e-mail",
			min: 5,
			name: "email",
			placeholder: "Wpisz tutaj adres e-mail",
			type: "text",
			required: true,
			variant: "input",
		},
		{
			id: "message",
			label: "Wiadomość",
			name: "message",
			placeholder: "Wpisz tutaj treść wiadomości",
			required: true,
			variant: "textarea",
		},
	],
};
