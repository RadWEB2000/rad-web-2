import { iSeoPage } from "../../src/ts/interface";

interface iProjectspageSection {
	seo: iSeoPage;
	title: string;
	content: string;
	categories: {
		name: string;
		value:
			| "programming"
			| "seo"
			| "copywriting"
			| "react"
			| "html"
			| "css"
			| "scss"
			| "next"
			| "gatsby"
			| "wordpress"
			| "php"
			| "bootstrap"
			| "styled-components";
	}[];
}

interface iProjectspage {
	pl: iProjectspageSection;
}

export const projectspage: iProjectspage = {
	pl: {
		seo: {
			image: "",
			meta: {
				title: "Projekty i realizacje komercyjne dla klientów - RadWEB",
				description:
					"Chcesz poznać tajniki pozycjonowania, lub dowiedzieć się jak tworzyć strony internetowe to idealnie trafiłeś. Wejdź na naszego bloga i dowiedz się więcej.",
			},
			og: {
				title: "Projekty i realizacje komercyjne - RadWEB",
				description:
					"Poznaj tajniki SEO i tworzenia stron internetowych. Zapraszamy do sprawdzenia naszego bloga.",
			},
		},
		title: "Projekty i realizacje",
		content:
			"Praktyka czyni mistrza - te słowa jasno określają rozwój RadWEB. Znajdziesz tutaj realizacje z zakresu tworzenia, pozycjonowania oraz optymalizacji stron internetowych. Tworzę aplikacje od warsty wizualnej oraz serwerowej czyli fachowo mówiąc front-end i back-end. Jestem zaprzyjaźniony z kilkoma jęzkami programowania tj. z JavaScript oraz PHP. Nie oznacza to, że jestem ograniczony jedynie do tych dwóch technologii ponieważ rozwijam się w innych językach programowania takimi jak Ruby czy Python.",
		categories: [
			{
				name: "programowanie",
				value: "programming",
			},
			{
				name: "seo",
				value: "seo",
			},
			{
				name: "copywriting",
				value: "copywriting",
			},
			{
				name: "react",
				value: "react",
			},
			{
				name: "html",
				value: "html",
			},
			{
				name: "css",
				value: "css",
			},
			{
				name: "scss",
				value: "scss",
			},
			{
				name: "next",
				value: "next",
			},
			{
				name: "gatsby",
				value: "gatsby",
			},
			{
				name: "wordpress",
				value: "wordpress",
			},
			{
				name: "php",
				value: "php",
			},
			{
				name: "bootstrap",
				value: "bootstrap",
			},
			{
				name: "styled components",
				value: "styled-components",
			},
		],
	},
};
