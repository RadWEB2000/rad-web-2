export interface IntPosterCss{
    ratio?:'4/3'|'1/1'|'16/9';
}
export interface IntPoster extends IntPosterCss {
    image:string;
    title:string;
}