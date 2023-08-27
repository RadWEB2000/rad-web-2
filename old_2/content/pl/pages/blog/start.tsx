import { iSeo } from "@default/src/ts/interfaces";

interface iBlogPage {
	seo: iSeo;
	hero: {
		title: string;
		content: string;
		image: string;
	};
}

const blogPage: iBlogPage = {
	seo: {
		image:
			"https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		metaDescription:
			"Internet jest z nami już od 54 lat. Od początku XXI ten środek masowego przekazu zdominował inne tradycjne media. Dowiedz się, jak możesz go na swoją korzyść.",
		metaTitle: "Blog, poznaj tajniki internetu 📰 - RadWEB",
		openGraphDescription:
			"Internet jest z nami już od ${new Date().getFullYear() - 1969} lat. Od początku XXI ten środek masowego przekazu zdominował inne tradycjne media. Dowiedz się, jak możesz go na swoją korzyść.",
		openGraphTitle: "Blog, poznaj tajniki internetu 📰 - RadWEB",
		website: "https://rad-web.vercel.app/blog",
		articleSection: "Blog, newsy, artykuły i porady RadWEB",
		canonical: "https://rad-web.vercel.app/blog",
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
				url: "https://rad-web.vercel.app/blog",
			},
			{
				"@context": "https://schema.org",
				"@type": "LocalBusiness",
				name: "RadWEB",
				image:
					"https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
		content: `Świat programowania, pozycjonowania - i co może zdziwić - historii mimo częstych rewolucji nadal jest w trakcie ewolucji. W związku z tym należy dokładać wszelkich starań aby być cały czas na bieżąco. Najlepszym miejscem do poznawania ciekawostek z tego świata bezapelacjnie jest blog, a w szczególności blog RadWEB, gdzie poza suchymi informacjami poznasz konkretne zagadnienia w możliwie jak najszerszym kontekście.`,
		image:
			"https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		title: "Blog",
	},
};

export default blogPage;
