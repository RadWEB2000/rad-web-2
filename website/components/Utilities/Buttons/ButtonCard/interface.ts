export interface IntButtonCard extends IntButttonCardCSS{
    path?:string;
    title:string;
    download?:boolean;
}
export interface IntButttonCardCSS {
    isPrimary?:boolean;
    isSecondary?:boolean;
}