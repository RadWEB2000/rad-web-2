export type tImage = {
    altText:string;
    sourceUrl:string;
    title:string;
}


export type tButton = {
    link:string;
    label:string;
}



export type tBlogCard = {
    title:string;
    date:string;
    uri:string;
} & (
    {
        categories: {
            label:string;
            uri:string;
        }
        image: tImage;
        theme : "primary";
    }
)