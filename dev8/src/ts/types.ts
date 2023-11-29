import { StaticImageData } from 'next/image';

export type tImage = {
    altText:string;
    sourceUrl:string|StaticImageData;
    title?:string;
}