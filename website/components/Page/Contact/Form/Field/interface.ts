import { FormEventHandler } from 'react';
export interface IntField {
    button?:'button'|'submit'|'reset';
    disabled?:boolean;
    field:'input'|'textarea'|'button';
    handle?:FormEventHandler;
    id?:string;
    maxLength?:number;
    minLength?:number;
    name?:string;
    pattern?:string;
    placeholder?:string;
    required?:boolean;
    title:string;
    variant?:'text'|'tel'|'email';
}