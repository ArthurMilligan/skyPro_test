import React, { FC, useState } from 'react';
import s from './select.module.scss'

interface ISelectProps{
    optionList: IOption[];
    value: string;
    setValue: (val:string)=>void;
    className?: string;
}
interface IOption{
    id:string;
    label:string
}

const Select:FC<ISelectProps> = ({optionList, value, setValue, className}) =>{
   
    return <select 
            className={`${s.select} ${className}`}
            defaultValue={value} 
            onChange={(e)=>setValue(e.target.value)}
        >
        {optionList
            .map((item)=>
                <option 
                    key={item.id}
                    value={item.id} 
                >
                    {item.label}
                </option>)
        }
    </select>
}

export default Select;
