export type tLang = "pl" | "en" | "es" | "de" | "it" | "ne" | "fr";
export type tAuthor =
	| "adamczyk_radoslaw"
	| "radoslaw_adamczyk"
	| "filip_bukowiecki"
	| "bukowiecki_filip"
	| "paluch_klaudia"
	| "klaudia_paluch";
export type tDateVariant = "short" | "long" | "numeric" | "roman";
export type tProjectCategory =
	| "seo"
	| "programming"
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
	| "styled-components"
	| string
	| "";

export type tFullname = {
	firstname: string;
	lastname: string;
};
