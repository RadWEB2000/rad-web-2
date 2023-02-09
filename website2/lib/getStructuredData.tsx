interface IntGetStructuredDataArticle {
	author: {
		fullname: {
			firstname: string;
			lastname: string;
		};
		path: string;
	};
	date: {
		modified: string;
		published: string;
	};
	images: string[] | string;
	title: string;
	url: string;
}
interface IntGetStructuredDataPerson {
	author: {
		fullname: {
			firstname: string;
			lastname: string;
		};
		image: string;
		jobs: string;
		path: string;
		socials: string[];
	};
}
interface IntGetStructuredDataWebsite {
	url: string;
}
export const getStructuredDataArticle = ({
	author,
	images,
	date,
	title,
	url,
}: IntGetStructuredDataArticle) => {
	const data = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `https://rad-web.vercel.app/${url}`,
		},
		headline: title,
		image: images,
		author: {
			"@type": "Person",
			name: `${author.fullname.firstname} ${author.fullname.lastname}`,
			url: `https://rad-web.vercel.app/${author.path}`,
		},
		publisher: {
			"@type": "Organization",
			name: "RadWEB",
			logo: {
				"@type": "ImageObject",
				url: "/assets/brand/logo.jpg",
			},
		},
		datePublished: date.published,
		dateModified: date.modified,
	};
	return data;
};
export const getStructuredDataOrganization = () => {
	const data = {
		"@context": "https://schema.org",
		"@type": "WorkersUnion",
		name: "RadWEB",
		alternateName: "RadWEB",
		url: "https://rad-web.vercel.app",
		logo: "/assets/brand/logo.jpg",
		sameAs: [
			"https://www.facebook.com/radoslaw.adamczyk.2000",
			"https://www.instagram.com/radoslaw.adamczyk.2000/",
			"https://www.youtube.com/channel/UCOHB1fpEKwxhjCEDNgVLEog",
			"https://www.linkedin.com/in/rados%C5%82aw-adamczyk-853948195/",
			"https://github.com/RadoslawAdamczyk2000",
			"https://rad-web.vercel.app",
		],
	};
	return data;
};

export const getStructuredDataPerson = ({
	author,
}: IntGetStructuredDataPerson) => {
	const data = {
		"@context": "https://schema.org/",
		"@type": "Person",
		name: `${author.fullname.firstname} ${author.fullname.lastname}`,
		url: `https://rad-web.vercel.app/${author.path}`,
		image: author.image,
		sameAs: [...author.socials],
		jobTitle: author.jobs,
		worksFor: {
			"@type": "Organization",
			name: "RadWEB",
		},
	};
	return data;
};
export const getStructuredDataWebsite = ({
	url,
}: IntGetStructuredDataWebsite) => {
	const data = {
		"@context": "https://schema.org/",
		"@type": "WebSite",
		name: "RadWEB",
		url: `https://rad-web.vercel.app${url}`,
	};
	return data;
};
