import { tImage2 } from "@default/ts/types";

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

export interface iArticlesHomePage {
	data: {
		posts: {
			edges: {
				node: {
					categories: {
						edges: {
							node: {
								name: string;
								uri: string;
							};
						}[];
					};
					post: {
						author: {
							teammate: {
								fullname: {
									firstname: string;
									lastname: string;
								};
							};
							uri: string;
						}[];
					};
					title: string;
					uri: string;
					date: string;
					featuredImage: {
						node: tImage2;
					};
				};
			}[];
		};
	};
}

export interface iArticlesBlogPageCard {
	node: {
		post: {
			author: {
				teammate: {
					fullname: {
						firstname: string;
						lastname: string;
					};
				};
				uri: string;
			}[];
		};
		featuredImage: {
			node: tImage2;
		};
		title: string;
		uri: string;
		date: string;
		excerpt: string;
		categories: {
			edges: {
				node: {
					name: string;
					uri: string;
				};
			}[];
		};
	};
}

export interface iArticlesBlogPage {
	edges: iArticlesBlogPageCard[];
}

export interface iArticlesRecommended {
	data: {
		teammate: {
			teammate: {
				articles: {
					categories: {
						edges: {
							node: {
								name: string;
								uri: string;
							};
						}[];
					};
					date: string;
					excerpt: string;
					featuredImage: {
						node: tImage2;
					};
					title: string;
					uri: string;
				}[];
			};
		};
	};
}
