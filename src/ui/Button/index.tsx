import React, { HTMLProps, ReactNode } from "react";
import { FC } from "react";
import s from './button.module.scss'

interface IButtonProps extends HTMLProps<HTMLButtonElement>{
    variant?:'submit' | 'clear';
    type?: 'button' | 'submit' | 'reset';
    children?: ReactNode;
    className?: string;
}

const Button:FC<IButtonProps> =({variant, children, className, ...rest})=>{
    return(
        <button className={`${s.button} ${s[variant]} ${className}`} {...rest}>
            {children}
        </button>
    )
}

export default Button;
