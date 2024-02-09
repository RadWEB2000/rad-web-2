import { tButton } from "./types";

export interface iArticlePostsHome  {
        nodes : {
            title:string;
            uri:string;
            featuredImage: {
                node: {
                altText:string;
                sourceUrl:string;
                title:string;
                }
            }
            dateGmt:string;
            categories: {
                nodes :{
                name:string;
                uri:string;
                }
            }[]
    }[]
}

export interface iArticlesBlogPageCard {
    title:string;
    excerpt:string;
    dateGmt:string;
    featuredImage : {
        node: {
            altText:string;
            sourceUrl:string;
            title:string;
        }
    };
    slug:string;
    categories: {
        nodes: {
            name:string;
            uri:string;
        }[];
    }
}

export interface iArticlesBlogPage {
    articles:iArticlesBlogPageCard[]
    button: string;    
}


export interface iSettings {
    allSettings: {
      generalSettingsLanguage:string,
      generalSettingsUrl:string
    }
}

export interface iHomePage {
    hero: {
        title:string;
        slogan:string;
        buttons: {
            button: tButton;
        }[];
    };
    blog : {
        title:string;
        content:string;
        button:tButton;
    };
    projects: {
        title:string;
        content:string;
        button:tButton;
    };
    statistics: {
        title:string;
        content:string;
        cards :{ 
            card: {
                value:number;
                title:string;
            }
        }[];
    };
    team: {
        title:string;
        content:string;
        button:tButton;
    };
    services: {
        title:string;
    }
}

