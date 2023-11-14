import React, { ChangeEvent, Dispatch, HTMLProps, FC } from "react";
import s from './input.module.scss'

interface IInputProps extends HTMLProps<HTMLInputElement> {
    error?:string;
    value: string;
}
const Input:FC<IInputProps> =({
    id,
    value,
    className,
    type = 'text',
    error,
    ...rest
})=>{
    return(
        <div className={s.input}>
        <input
          id={id}
          value={value}
          className={`${s.input__input} ${className}`}
          type={type}
          {...rest}
        />
        {!!error && (
        <span className={s.input__error}>
          {error}
        </span>
      )}
        </div>
        
    )
}

export default Input;