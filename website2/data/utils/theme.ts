export type TypeThemeValue = {
	[key: string]: string;
};
export const theme = {
	dark: {
		background: "#1D1D1D",
		color: "#FAF8FF",
		primary: "#00C896",
		secondary: "#65FBD2",
		tertiary: "#FF00FF",
		quatenary: "#F9F871",
		quinary: "#463bd4",
		senary: "#5549f1",
		septenary: "#d1cdff",
		aboutUsSection:
			"linear-gradient(to bottom,hsla(244, 86%, 62%, 0.15),hsla(244, 86%, 62%, 0.3))",
		blogCardBlogPageHoverBackground: "hsla(0, 100%, 0%, 80%)",
		blogCardBlogPageBackground: "hsla(0, 0%, 100%, 0.8)",
		buttonSecondaryOutline: "2.5px solid hsla(0, 0%, 0%, 0.7)",
		buttonSecondaryOutlineHover: "2.5px solid var(--senary)",
		buttonTertiaryHoverShadow: "0 0 0 var(--quinary)",
		buttonTertiaryShadow: "0 0.5rem 0 #100b51",
		codeBackground: "#011627",
		codeColor: "#f7f7f7",
		contactFieldBackground: "hsla(0, 0%, 0%, 0.05)",
		contactFieldBackgroundHover: "hsla(0, 0%, 0%, 0.1)",
		contactFieldInputBackground: "hsla(0, 0%, 0%, 0)",
		contactFieldInputColor: "hsla(0, 0%, 0%, 0)",
		contactFieldLabelColor: "hsla(0, 0%, 0%, 0.6)",
		contactInformationBackground: "rgba(0, 0, 0, 0.03)",
		contactInformationBorder: "1px solid rgb(0, 0, 0, 0.1)",
		googleMaps: "#e8eaed",
		grayGradient:
			"linear-gradient(to right bottom,var(--background),var(--white))",
		missionCardHoverShadow: "0 0 0.4rem 0.2rem hsla(0, 0%, 39%, 0.102)",
		missionCardHoverOutline: "1px solid hsla(0, 0%, 0%, 0)",
		missionCardOutline: "1px solid rgb(0, 0, 0, 0.1)",
		navShadow: "0 0.5rem 0.2rem hsla(0, 100%, 0%, 0.1)",
		personContactPageBorder: "1px solid hsla(0, 0%, 0%, 0.1)",
		personContactPageContentHover: "hsla(0, 0%, 0%, 0.1)",
		personHeroContactItem: "hsla(244, 86%, 62%, 0.2)",
		personHeroWebsiteBackground: "hsla(244, 86%, 62%, 0.1)",
		personHeroWebsiteBackgroundHover: "hsla(244, 86%, 62%, 0.3)",
		personHeroWebsiteShadow: "0 0 1rem hsla(0, 100%, 0%, 0.1)",
		personHomePageShadowHover: "0 0.25rem 0.5rem hsla(0, 100%, 0%, 0.15)",
		progressScroll:
			"linear-gradient(to right,var(--tertiary),var(--secondary))",
		projectPageCard: "hsla(244, 86%, 62%, 0.2)",
		searchBorder: "1px solid hsla(0, 0%, 0%, 0.3)",
		searchOutline: "0px solid hsla(0, 0%, 0%, 0)",
		slideBackground:
			"linear-gradient(to right bottom,var(--background),hsla(244, 86%, 62%, 0.03))",
		socialFooter: "rgb(85, 73, 241, 0.12)",
		summaryBackground: "rgb(85, 73, 241, 0.1)",
		summaryBorder: "0.3rem solid rgb(85, 73, 241)",
		termsBackground:
			"linear-gradient(to right,hsl(120, 93%, 79, 0.3),hsl(120, 93%, 79%, 0.8))",
		testimonialShadow: "0 0 1rem hsl(0, 0%, 57%, 0.25)",
		white: "#f7f7f7",
	},
	light: {
		background: "#fff",
		color: "#000",
		primary: "#414756",
		secondary: "#000DAA",
		tertiary: "#4d1790",
		quatenary: "#515151",
		quinary: "#463bd4",
		senary: "#5549f1",
		septenary: "#d1cdff",
		aboutUsSection:
			"linear-gradient(to bottom,hsla(244, 86%, 62%, 0.15),hsla(244, 86%, 62%, 0.3))",
		blogCardBlogPageHoverBackground: "hsla(0, 100%, 0%, 80%)",
		blogCardBlogPageBackground: "hsla(0, 0%, 100%, 0.8)",
		buttonSecondaryOutline: "2.5px solid hsla(0, 0%, 0%, 0.7)",
		buttonSecondaryOutlineHover: "2.5px solid var(--senary)",
		buttonTertiaryHoverShadow: "0 0 0 var(--quinary)",
		buttonTertiaryShadow: "0 0.5rem 0 #100b51",
		codeBackground: "#011627",
		codeColor: "#f7f7f7",
		contactFieldBackground: "hsla(0, 0%, 0%, 0.05)",
		contactFieldBackgroundHover: "hsla(0, 0%, 0%, 0.1)",
		contactFieldInputBackground: "hsla(0, 0%, 0%, 0)",
		contactFieldInputColor: "hsla(0, 0%, 0%, 0)",
		contactFieldLabelColor: "hsla(0, 0%, 0%, 0.6)",
		contactInformationBackground: "rgba(0, 0, 0, 0.03)",
		contactInformationBorder: "1px solid rgb(0, 0, 0, 0.1)",
		googleMaps: "#e8eaed",
		grayGradient:
			"linear-gradient(to right bottom,var(--background),var(--white))",
		missionCardHoverShadow: "0 0 0.4rem 0.2rem hsla(0, 0%, 39%, 0.102)",
		missionCardHoverOutline: "1px solid hsla(0, 0%, 0%, 0)",
		missionCardOutline: "1px solid rgb(0, 0, 0, 0.1)",
		navShadow: "0 0.5rem 0.2rem hsla(0, 100%, 0%, 0.1)",
		personContactPageBorder: "1px solid hsla(0, 0%, 0%, 0.1)",
		personContactPageContentHover: "hsla(0, 0%, 0%, 0.1)",
		personHeroContactItem: "hsla(244, 86%, 62%, 0.2)",
		personHeroWebsiteBackground: "hsla(244, 86%, 62%, 0.1)",
		personHeroWebsiteBackgroundHover: "hsla(244, 86%, 62%, 0.3)",
		personHeroWebsiteShadow: "0 0 1rem hsla(0, 100%, 0%, 0.1)",
		personHomePageShadowHover: "0 0.25rem 0.5rem hsla(0, 100%, 0%, 0.15)",
		progressScroll:
			"linear-gradient(to right,var(--tertiary),var(--secondary))",
		projectPageCard: "hsla(244, 86%, 62%, 0.2)",
		searchBorder: "1px solid hsla(0, 0%, 0%, 0.3)",
		searchOutline: "0px solid hsla(0, 0%, 0%, 0)",
		slideBackground:
			"linear-gradient(to right bottom,var(--background),hsla(244, 86%, 62%, 0.03))",
		socialFooter: "rgb(85, 73, 241, 0.12)",
		summaryBackground: "rgb(85, 73, 241, 0.1)",
		summaryBorder: "0.3rem solid rgb(85, 73, 241)",
		termsBackground:
			"linear-gradient(to right,hsl(120, 93%, 79, 0.3),hsl(120, 93%, 79%, 0.8))",
		testimonialShadow: "0 0 1rem hsl(0, 0%, 57%, 0.25)",
		white: "#f7f7f7",
	},
};
