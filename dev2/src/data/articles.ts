import { tImage } from "ts/types";

type tArticle = {
    image: tImage;
    title: string;
    category: {
        label: string;
        uri: string;
    };
    release: string;
    uri: string;
};

export const articles: tArticle[] = [
    {
        category: {
            label: "Systemy operacyjne",
            uri: "#",
        },
        image: {
            altText: "",
            sourceUrl:
                "https://miro.medium.com/v2/resize:fit:720/format:webp/0*tnuNbnRERWq6OcQv.jpg",
            title: "",
        },
        release:
            "Sat Dec 09 2023 11:27:29 GMT+0100 (Central European Standard Time)",
        title: "It’s 2023, Please Stop Using “&&” for Conditional Rendering in React",
        uri: "#",
    },
];
