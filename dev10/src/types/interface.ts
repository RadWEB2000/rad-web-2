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


export interface iSettings {
    allSettings: {
      generalSettingsLanguage:string,
      generalSettingsUrl:string
    }
}