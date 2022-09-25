export interface IntProjectCard {
  category:{
    name:string;
    value:'web'|'marketing'|'artist';
  };
  content:string;
  image:string;
  isBig?:boolean;
  path:string;
  title:string;
}
export interface IntProjectCardCss {
  background:string;
  color:string;
}
