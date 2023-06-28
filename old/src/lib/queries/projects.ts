import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
	query GetProjects {
		projects {
			edges {
				node {
					title
					uri
					slug
					id
					date
					excerpt
					featuredImage {
						node {
							altText
							uri
							slug
							sourceUrl
							mediaType
							mediaItemUrl
							dataUrl
						}
					}
				}
			}
		}
	}
`;
