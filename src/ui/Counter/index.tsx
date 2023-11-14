import React, { FC } from 'react';
import Text from '../Text';
import s from './counter.module.scss'
import Icon from '../Icon';

interface ICounterProps{
    value: number;
    onIncrease: ()=>void;
    onDecrease: ()=>void;
}

const Counter:FC<ICounterProps> = ({value, onDecrease, onIncrease}) =>{
    return <div className={s.counter}>
        <Text  className={s.counter__count}>{value}</Text>
        <div className={s.counter__buttonConainer}>
            <button onClick={onIncrease} className={s.counter__button}>
                <Icon name='arrowUp' size={16}/>
            </button>
            <button onClick={onDecrease} className={s.counter__button}>
                <Icon name='arrowDown' size={16}/>
            </button>
        </div>
    </div>
}

export default Counter;