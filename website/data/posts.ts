interface IntPosts {
    articles:{
        content:string;
        date:string;
        image:string;
        path:string;
        title:string;
    }[];
    projects:{
        category:{
            name:string;
            value:'artist'|'marketing'|'web';
        };
        content:string;
        image:string;
        path:string;
        title:string;
    }[]
}
export const posts:IntPosts = {
    articles:[
        {
            content:`Najczęściej używanymi systemami operacyjnymi są Mac OS, Linux oraz Windows. Windows jest najpoplarniejszy, ale dlaczego`,
            date:'Sun Jun 05 2022 00:00:00 GMT+0200 (czas środkowoeuropejski letni)',
            image:'https://images.unsplash.com/photo-1624571395775-253d9666612b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            path:'/blog/programowanie/fenomen-windowsa',
            title:'Fenomen Windowsa'
        },
        {
            content:`Zakładam, że w Twoich myślach wielokrotnie przewijał się pomysł własnej strony internetowej. Co warto mieć na uwadze podczas jej tworzenia?`,
            date:'Tue Apr 12 2022 00:00:00 GMT+0200 (czas środkowoeuropejski letni)',
            image:'https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_960_720.jpg',
            path:'/blog/programowanie/cechy-dobrej-strony-internetowej',
            title:'Cechy dobrej strony internetowej'
        },
        {
            content:`Istnieje wielki spór nt. tego czy HTML jest językiem programowania, ale jakie były jego początki?`,
            date:'Mon Apr 11 2022 00:00:00 GMT+0200 (czas środkowoeuropejski letni)',
            image:'https://cdn.pixabay.com/photo/2017/09/05/10/19/business-2717063_960_720.jpg',
            path:'/blog/programowanie/czym-jest-html',
            title:'Czym jest HTML? - historia czy teraźniejszość?'
        },
    ],
    projects:[
        {
            category:{
                name:'aplikacja',
                value:'web'
            },
            content:'RadWEB FilmBase to aplikacja, która umożliwi Tobie szybkie oraz intuicyjne wyszukiwanie dowolonego filmu, serialu bądź obsadę aktorską',
            image:'https://images.unsplash.com/photo-1559570278-eb8d71d06403?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80',
            path:'/projekty/radweb-filmbase',
            title:'RadWEB FilmBase'
        },
        {
            category:{
                name:'strona internetowa',
                value:'web'
            },
            content:'Borówki są jednym z najlepszych owoców w deserach. Równie dobre są przetwory jak chociażby powidła borówkowe. Natomiast najlepszym doświadczeniem jest stworzenie strony dla Borówkowego Gaju',
            image:'https://images.unsplash.com/photo-1554795808-3231c32711cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
            path:'/projekty/borowkowy-gaj',
            title:'Borówkowy Gaj'
        },
    ]
}