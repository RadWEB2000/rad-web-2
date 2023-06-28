import { gql } from "@apollo/client";

export const GET_PROJECT = gql`
	query GetProject($uri: String!) {
		projectBy(uri: $uri) {
			seo {
				breadcrumbs {
					text
					url
				}
				canonical
				metaDesc
				title
				readingTime
				metaRobotsNoindex
				metaRobotsNofollow
				opengraphModifiedTime
				opengraphPublishedTime
				opengraphTitle
				opengraphUrl
				opengraphDescription
				opengraphAuthor
			}
			slug
			title
			date
			uri
			featuredImage {
				node {
					altText
					title
					sourceUrl
				}
			}
			excerpt
			content
			rodzajeProjektu {
				edges {
					node {
						id
					}
				}
				nodes {
					name
					slug
				}
			}
			technologie {
				edges {
					node {
						name
						uri
					}
				}
			}
		}
	}
`;
