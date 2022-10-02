interface iPosts {
    author:string;
    category:string;
    excerpt:string;
    graphic:string;
    meta:{
        description:string;
        title:string;
    };
    path:string;
    publish:{
        release:string;
        time:string;
    };
    title:string;
}
export const posts:iPosts[] = [
    {
        author:'Radosław Adamczyk',
        category:'programowanie',
        excerpt:'asdio adkiokasdpoi',
        graphic:'https://cdn.pixabay.com/photo/2022/09/17/08/38/autumn-7460414_960_720.jpg',
        meta:{
            title:'1',
            description:'1'
        },
        path:'123',
        publish:{
            release:'12-02-2022',
            time:'12-02-2022',
        },
        title:'Investor Brand Officer'
    },
    {
        author:'Radosław Adamczyk',
        category:'programowanie',
        excerpt:'asdio adkiokasdpoi',
        graphic:'https://cdn.pixabay.com/photo/2022/09/17/08/38/autumn-7460414_960_720.jpg',
        meta:{
            title:'1',
            description:'1'
        },
        path:'456',
        publish:{
            release:'12-02-2022',
            time:'12-02-2022',
        },
        title:'International Marketing Manager'
    },
    {
        author:'Radosław Adamczyk',
        category:'programowanie',
        excerpt:'asdio adkiokasdpoi',
        graphic:'https://cdn.pixabay.com/photo/2022/09/17/08/38/autumn-7460414_960_720.jpg',
        meta:{
            title:'1',
            description:'1'
        },
        path:'5768',
        publish:{
            release:'12-02-2022',
            time:'12-02-2022',
        },
        title:'Investor Optimization Designer'
    },
]