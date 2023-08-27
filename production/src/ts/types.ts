import { StaticImageData } from "next/image";

export type t_brand = {
	allSettings: {
		generalSettingsTitle: string;
	};
};

export type t_menu_primary = {
	menu: {
		menuItems: {
			edges: {
				node: {
					label: string;
					path: string;
				};
			}[];
		};
	};
};

export type t_posts_regular = {
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
				date: string;
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
				status: string;
				title: string;
				uri: string;
			};
		}[];
	};
};

export type t_team_home = {
	teammates: {
		edges: {
			node: {
				teammate: {
					fullname: {
						firstname: string;
						lastname: string;
					};
					job: {
						jobName: string;
					}[];
				};
				uri: string;
				featuredImage: {
					node: {
						altText: string;
						sourceUrl: string;
						title: string;
					};
				};
			};
		}[];
	};
};

export type t_team_home_card = {
	node: {
		teammate: {
			fullname: {
				firstname: string;
				lastname: string;
			};
			job: {
				jobName: string;
			}[];
		};
		uri: string;
		featuredImage: {
			node: {
				altText: string;
				sourceUrl: string;
				title: string;
			};
		};
	};
};

export type tImage = {
	alt: string;
	src: string | StaticImageData;
	title: string;
};

export type tCardPostRegular = {
	node: {
		categories: {
			edges: {
				node: {
					name: string;
					uri: string;
				};
			}[];
		};
		date: string;
		featuredImage: {
			node: {
				sourceUrl: string;
				altText: string;
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
		status: string;
		title: string;
		uri: string;
	};
};

// ----------------------------------------------------------------------
export type t_home_page_content = {
	page: {
		homePage: {
			aboutUs: {
				title: string;
				content: string;
			};
			blog: {
				title: string;
				content: string;
				button: string;
				uri: string;
			};
			hero: {
				backgroundimage: {
					altText: string;
					sourceUrl: string;
					title: string;
				};
				buttons: {
					label: string;
					uri: string;
				}[];
				title: string;
				slogan: string;
			};
			projects: {
				title: string;
				content?: string;
				button?: string;
				uri?: string;
			};
			offer: {
				title: string;
				content: string;
				button: string | null;
				uri: string | null;
				cards: {
					title: string;
					content: string;
					button: string | null;
					uri: string | null;
				}[];
			};
			servicesCards: {
				button: null | string;
				color: string;
				image: {
					altText: string;
					sourceUrl: string;
					title: string;
				};
				title: string;
				uri: null | string;
			}[];
			statistics: {
				description: string;
				icon: string;
				value: number;
			}[];
			watchWord: string;
		};
	};
	posts: {
		edges: {
			node: {
				categories: {
					edges: {
						name: string;
						uri: string;
					}[];
				};
				date: string;
				featuredImage: {
					node: {
						altText: string;
						sourceUrl: string;
						title: string;
					};
				};
				title: string;
				uri: string;
				post: {
					author: {
						fullname: {
							firstname: string;
							lastname: string;
						};
					};
				};
			};
		}[];
	};
	projects: {
		edges: {
			node: {
				excerpt: string;
				featuredImage: {
					node: {
						altText: string;
						sourceUrl: string;
						title: string;
					};
				};
				title: string;
				uri: string;
			};
		}[];
	};
	teammates: {
		edges: {
			node: {
				featuredImage: {
					node: {
						altText: string;
						sourceUrl: string;
						title: string;
					};
				};
				teammate: {
					fullname: {
						firstname: string;
						lastname: string;
					};
					job: {
						jobName: string;
					}[];
				};
				uri: string;
			};
		}[];
	};
};
