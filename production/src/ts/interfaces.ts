export interface iArticlesArray {
	node: {
		title: string;
		uri: string;
		excerpt: string;
		featuredImage: {
			node: {
				altText: string;
				sourceUrl: string;
				title: string;
			};
		};
		post: {
			author: {
				teammate: {
					fullname: {
						firstname: string;
						lastname: string;
					};
				};
			}[];
		};
		categories: {
			edges: {
				node: {
					name: string;
					uri: string;
				};
			}[];
		};
		date: string;
	};
}
