export interface IntCertificates {
    certificates:{
        content:string;
        path:string;
        title:string;
    }[]    
}
export interface IntWorks {
    works:{
        content:string;
        position:string;
        time:{
            end:string;
            start:string;
        };
        title:string;
    }[];
}
export interface IntSectionCards {
    certificates?:{
        content:string;
        path:string;
        title:string;
    }[];
    title:string;
    works?:{
        content:string;
        position:string;
        time:{
            end:string;
            start:string;
        };
        title:string;
    }[];
}