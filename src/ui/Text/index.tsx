import React from "react";
import { FC } from "react";
import s from './text.module.scss'

interface ITextProps{
    children:string | number;
    type?: 'crossed' | 'default'
    fontSize?: 'normal' | 'large' | 'extraLarge' | 'small';
    className?:string;
}
const Text:FC<ITextProps> = ({children,className, type='default', fontSize='normal'})=>{
    return <span className={`${s.text} ${s[type]} ${s[fontSize]} ${className}`}>{children}</span>
}
export default Text;
